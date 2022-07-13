import { v4 as uuid } from 'uuid';

export type EntityId = string;
export const createId = () => uuid() as EntityId;

const storageName = 'app-rog';

function storagePath(...args: string[]): string {
  return [storageName, ...args].join(':');
}

function getItem(key: string): Promise<any> {
  const dataString = localStorage.getItem(key);
  const data = JSON.parse(dataString || 'null');
  return Promise.resolve(data);
}

function setItem<T>(key: string, value: T): Promise<void> {
  const dataString = JSON.stringify(value);
  localStorage.setItem(key, dataString);
  return Promise.resolve();
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

export { storagePath, getItem, setItem, getKeysFor };
