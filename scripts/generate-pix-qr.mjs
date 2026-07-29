import { writeFile } from 'node:fs/promises';
import {
  generateStaticBrCode,
  isValidBrCode,
  parseStaticBrCode,
  projectCity,
  projectReceiverName,
  validateCrc16,
} from '@thiagoprazeres/pix-static-brcode';
import QRCode from 'qrcode';
import { Bitmap } from 'qr';
import decodeQR from 'qr/decode.js';
import { institutionConfig } from '../src/data.js';

const pixKey = institutionConfig.cnpj.replace(/\D/g, '');
const receiverName = projectReceiverName(institutionConfig.name);
const receiverCity = projectCity(institutionConfig.address.addressLocality);
const outputPath = new URL('../public/pix-qrcode.svg', import.meta.url);

const calculateCnpjDigit = (digits, weights) => {
  const sum = digits.reduce((total, digit, index) => total + Number(digit) * weights[index], 0);
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

const isValidCnpj = (cnpj) => {
  if (!/^\d{14}$/.test(cnpj) || /^(\d)\1{13}$/.test(cnpj)) return false;
  const digits = [...cnpj];
  const firstDigit = calculateCnpjDigit(digits.slice(0, 12), [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const secondDigit = calculateCnpjDigit([...digits.slice(0, 12), String(firstDigit)], [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  return digits[12] === String(firstDigit) && digits[13] === String(secondDigit);
};

if (!isValidCnpj(pixKey)) {
  throw new Error('A chave Pix institucional não é um CNPJ válido com 14 dígitos.');
}

const payload = generateStaticBrCode({
  pixKey,
  receiverName,
  receiverCity,
  referenceLabel: '***',
});

const parsedPayload = parseStaticBrCode(payload);
const crcValid = validateCrc16(payload);
const brCodeValid = isValidBrCode(payload);
const topLevelTags = [];

for (let offset = 0; offset < payload.length; ) {
  const tag = payload.slice(offset, offset + 2);
  const length = Number(payload.slice(offset + 2, offset + 4));
  if (!/^\d{2}$/.test(tag) || !Number.isInteger(length)) {
    throw new Error(`Campo EMV inválido na posição ${offset}.`);
  }
  topLevelTags.push(tag);
  offset += 4 + length;
}

if (!crcValid || !brCodeValid) {
  throw new Error('O payload Pix gerado não passou pela validação BR Code/CRC16.');
}

if (parsedPayload.pixKey !== pixKey) {
  throw new Error('A chave Pix lida no payload não corresponde ao CNPJ institucional.');
}

if (parsedPayload.amount !== undefined || topLevelTags.includes('54')) {
  throw new Error('O payload Pix não deve conter um valor fixo.');
}

const svg = await QRCode.toString(payload, {
  type: 'svg',
  errorCorrectionLevel: 'M',
  margin: 4,
  color: {
    dark: '#000000',
    light: '#FFFFFF',
  },
});

await writeFile(outputPath, `<?xml version="1.0" encoding="UTF-8"?>\n${svg}`, 'utf8');

// A matriz usada pelo gerador do SVG é reconstruída com zona de silêncio e
// decodificada por uma segunda biblioteca para testar a leitura ponta a ponta.
const generatedQr = QRCode.create(payload, { errorCorrectionLevel: 'M' });
const quietZone = 4;
const matrixSize = generatedQr.modules.size;
const bitmapSize = matrixSize + quietZone * 2;
const bitmapRows = Array.from({ length: bitmapSize }, () => Array(bitmapSize).fill(false));

for (let y = 0; y < matrixSize; y += 1) {
  for (let x = 0; x < matrixSize; x += 1) {
    bitmapRows[y + quietZone][x + quietZone] = Boolean(
      generatedQr.modules.data[y * matrixSize + x],
    );
  }
}

const bitmap = new Bitmap(bitmapSize, bitmapRows).scale(8);
const decodedPayload = decodeQR(bitmap.toImage());

if (decodedPayload !== payload) {
  throw new Error('A leitura do QR Code não reproduziu integralmente o payload Pix.');
}

const decodedPix = parseStaticBrCode(decodedPayload);

console.log(
  JSON.stringify(
    {
      output: 'public/pix-qrcode.svg',
      pixKey: decodedPix.pixKey,
      receiverName: decodedPix.receiverName,
      receiverCity: decodedPix.receiverCity,
      amount: decodedPix.amount ?? null,
      crcValid,
      brCodeValid,
      qrReadbackValid: decodedPayload === payload,
      payload,
    },
    null,
    2,
  ),
);
