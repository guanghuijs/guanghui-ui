function addZero(num: number): string {
  return Number(num) > 9 ? String(num) : `0${num}`;
}

export function calcTime(date: number | string): {
  day: string;
  hour: string;
  minute: string;
  second: string;
  millisecond: string;
} {
  const day = String(Math.floor(Number(date) / 1000 / (60 * 60 * 24)));
  const hour = addZero(Math.floor((Number(date) / 1000 / (60 * 60)) % 24));
  const minute = addZero(Math.floor((Number(date) / 1000 / 60) % 60));
  const second = addZero(Math.floor((Number(date) / 100) % 60));
  const millisecond = addZero(Number(date) % 100);
  return { day, hour, minute, second, millisecond };
}

export function timeFormat(date: number, format: string = 'HH:mm:ss:SS') {
  const { day, hour, minute, second, millisecond } = calcTime(date);
  return format
    .replace(/DD/g, day)
    .replace(/hh|HH/g, hour)
    .replace(/mm|MM/g, minute)
    .replace(/ss/g, second)
    .replace(/SS/g, millisecond);
}

export function propTimeFormat(time: string | number): number | undefined {
  if (typeof time === 'string') {
    if (time.endsWith('m')) {
      return Number(time.slice(0, time.length - 1)) * 60 * 1000;
    } else if (time.endsWith('h')) {
      return Number(time.slice(0, time.length - 1)) * 3600 * 1000;
    }
  } else if (typeof time === 'number') {
    return time * 1000;
  } else {
    return 0;
  }
}
