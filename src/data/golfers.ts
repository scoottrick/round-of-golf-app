import { Golfer, GolferId } from '../model/Golfer';
import {
  getItem,
  setItem,
  getKeysFor,
  storagePath,
  removeItem,
} from './data-utils';

const localKey = 'golfers';

export function getGolfers(): Golfer[] {
  return getKeysFor(localKey).map(key => getItem(key));
}

export function saveGolfer(golfer: Golfer) {
  return setItem(storagePath(localKey, golfer.id), golfer);
}

export function saveGolfers(golfers: Golfer[]) {
  golfers.forEach(golfer => {
    const key = storagePath(localKey, golfer.id);
    setItem(key, golfer);
  });
}

export function removeGolfer(id: GolferId) {
  return removeItem(storagePath(localKey, id));
}
