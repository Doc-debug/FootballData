export function stringToDate(value: string): Date {
  return new Date(value);
}

export function isValidDateRange(start?: Date | null, end?: Date | null) {
  if (!start || !end) return false;
  return end.getTime() - start.getTime() >= 0;
}

export function toISODateString(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.getMonth().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

interface offsetDateProp {
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
}
export function offsetDate(offset: offsetDateProp, date: Date = new Date()) {
  let deltaTime = 0;
  if (offset.seconds) {
    deltaTime += offset.seconds * 1000;
  }
  if (offset.minutes) {
    deltaTime += offset.minutes * 60000;
  }
  if (offset.hours) {
    deltaTime += offset.hours * 360000;
  }
  if (offset.days) {
    deltaTime += offset.days * 86400000;
  }
  var d = new Date(date.getTime() + deltaTime);
  return d;
}
