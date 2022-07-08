import { GolfRound } from './golf';
import { EntityId } from './utils';

const storageName = 'app-rog';
const roundsName = 'rounds';

function buildKey(...args: string[]) {
  return args.join(':');
}

function getItem(key: string) {
  const dataString = localStorage.getItem(key);
  return JSON.parse(dataString || 'null');
}

function setItem<T>(key: string, value: T) {
  const dataString = JSON.stringify(value);
  localStorage.setItem(key, dataString);
}

function getAppKeys() {
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

export function saveRound(round: GolfRound) {
  const key = buildKey(storageName, roundsName, round.id);
  setItem(key, round);
}

export function deleteRound(round: GolfRound) {
  localStorage.removeItem(buildKey(storageName, roundsName, round.id));
}

export function loadRounds() {
  const roundKeys = getAppKeys().filter(k =>
    k.startsWith(buildKey(storageName, roundsName))
  );
  return roundKeys.map(k => getItem(k)) as GolfRound[];
}

export default {};
