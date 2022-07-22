const storageName = 'app-rog';

function storagePath(...args: string[]): string {
  return [storageName, ...args].join(':');
}

function getItem(key: string) {
  const dataString = localStorage.getItem(key);
  return JSON.parse(dataString || 'null');
}

function setItem<T>(key: string, value: T) {
  const dataString = JSON.stringify(value);
  localStorage.setItem(key, dataString);
}

function removeItem(key: string) {
  localStorage.removeItem(key);
}

function getAppKeys(): string[] {
  const keys = [] as string[];
  for (let i = 0; i < localStorage.length; i++) {
    const iKey = localStorage.key(i);
    const isFromApp = iKey && iKey.startsWith(storageName);
    if (isFromApp) {
      keys.push(iKey);
    }
  }
  return keys;
}

function getKeysFor(name: string): string[] {
  return getAppKeys().filter(localKeys =>
    localKeys.startsWith(storagePath(name))
  );
}

export { storagePath, getItem, setItem, removeItem, getKeysFor };
