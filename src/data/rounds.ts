import { Golfer } from '../model/Golfer';
import { GolfRound } from '../model/GolfRound';
import {
  getItem,
  setItem,
  getKeysFor,
  storagePath,
  removeItem,
} from './data-utils';

const localKey = 'rounds';

export async function getRounds(): Promise<GolfRound[]> {
  return await Promise.all(getKeysFor(localKey).map(key => getItem(key)));
}

export async function saveRound(round: GolfRound): Promise<void> {
  return await setItem(storagePath(localKey, round.id), round);
}

export async function deleteRound(round: GolfRound): Promise<void> {
  return await removeItem(storagePath(localKey, round.id));
}

export function getParticipatingGolfers(
  round: GolfRound,
  golferList: Golfer[]
): Golfer[] {
  const result = [] as Golfer[];
  if (!round || !golferList) {
    return result;
  }
  for (let id of round.golferIds) {
    const golfer = golferList.find(g => g.id === id);
    if (golfer) {
      result.push(golfer);
    }
  }
  return result;
}
