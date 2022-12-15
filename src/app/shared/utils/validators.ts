export function isNull(value: any) {
  return value === null;
}
export function isAnyNull(...values: any) {
  for (const value of values) {
    if (value === null) return true;
  }
  return false;
}
export function isAllNull(...values: any) {
  for (const value of values) {
    if (value !== null) return false;
  }
  return true;
}

export function compare(
  a: number | string,
  b: number | string,
  isAsc: boolean
) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

export function compareDate(a: Date, b: Date, isAsc: boolean) {
  return (b.getTime() - a.getTime()) * (isAsc ? 1 : -1);
}
