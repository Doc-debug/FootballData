export function setLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key: string): any | null {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export function removeLocalStorageKey(key: string): void {
  localStorage.removeItem(key);
}

export function setSessionStorage(key: string, value: any): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorage(key: string): any | null {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export function removeSessionStorageKey(key: string): void {
  sessionStorage.removeItem(key);
}
