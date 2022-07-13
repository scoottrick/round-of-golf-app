import { GolfRound } from '../model/GolfRound';
import { getItem, setItem, getKeysFor, storagePath } from './data-utils';

const localKey = 'rounds';

export async function getRounds(): Promise<GolfRound[]> {
  return await Promise.all(getKeysFor(localKey).map(key => getItem(key)));
}

export async function saveRound(round: GolfRound): Promise<void> {
  return await setItem(storagePath(localKey, round.id), round);
}
