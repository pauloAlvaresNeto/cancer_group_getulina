const SECOND = 1_000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const normalizeTime = (time) => {
  if (!time) return '00:00:00';
  return time.length === 5 ? `${time}:00` : time;
};

export const getEventTargetTimestamp = ({ date, time, utcOffset }) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date || '')) return Number.NaN;
  if (!/^[+-]\d{2}:\d{2}$/.test(utcOffset || '')) return Number.NaN;
  return Date.parse(`${date}T${normalizeTime(time)}${utcOffset}`);
};

export const getCountdownState = (event, now = Date.now()) => {
  const target = getEventTargetTimestamp(event);
  if (Number.isNaN(target)) return { state: 'invalid', days: 0, hours: 0, minutes: 0, seconds: 0 };

  const remaining = target - now;
  if (remaining <= 0) {
    return {
      state: now < target + DAY ? 'today' : 'past',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    state: 'future',
    days: Math.floor(remaining / DAY),
    hours: Math.floor((remaining % DAY) / HOUR),
    minutes: Math.floor((remaining % HOUR) / MINUTE),
    seconds: Math.floor((remaining % MINUTE) / SECOND),
  };
};
