import { Golfer } from '../model/Golfer';
import { GolfRound, GolfRoundId } from '../model/GolfRound';
import {
  getItem,
  setItem,
  getKeysFor,
  storagePath,
  removeItem,
} from './data-utils';

const localKey = 'rounds';

export function getRounds(): GolfRound[] {
  return getKeysFor(localKey).map(key => getItem(key));
}

export function saveRound(round: GolfRound) {
  return setItem(storagePath(localKey, round.id), round);
}

export function saveRounds(rounds: GolfRound[]) {
  return rounds.forEach(round => saveRound(round));
}

export function deleteRound(id: GolfRoundId) {
  return removeItem(storagePath(localKey, id));
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
