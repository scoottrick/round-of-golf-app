import { Golfer } from '../model/Golfer';
import { getItem, setItem, getKeysFor, storagePath } from './data-utils';

const localKey = 'golfers';

export async function getAllGolfers(): Promise<Golfer[]> {
  return await Promise.all(getKeysFor(localKey).map(key => getItem(key)));
}

export async function saveGolfer(golfer: Golfer): Promise<void> {
  return await setItem(storagePath(localKey, golfer.id), golfer);
}
