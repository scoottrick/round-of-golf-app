import { useEffect, useState } from 'react';
import { deleteRound, getRounds, saveRound, saveRounds } from '../data/rounds';
import { GolfRound, GolfRoundId } from '../model/GolfRound';

export function useSavedRounds() {
  const [rounds, setSavedRounds] = useState([] as GolfRound[]);

  async function loadRounds() {
    const golfers = await getRounds();
    setSavedRounds(golfers);
  }

  useEffect(() => {
    loadRounds();
  }, []);

  const addRound = (newRound: GolfRound) => {
    const roundList = [newRound, ...rounds];
    setSavedRounds(roundList);
    saveRounds(roundList);
  };

  const updateRound = (updatedRound: GolfRound) => {
    const roundList = rounds.map(round => {
      if (round.id === updatedRound.id) {
        return updatedRound;
      }
      return round;
    });
    setSavedRounds(roundList);
    saveRounds(roundList);
  };

  const setRounds = (roundList: GolfRound[]) => {
    setSavedRounds(roundList);
    saveRounds(roundList);
  };

  const removeRound = (id: GolfRoundId) => {
    const updatedList = rounds.filter(round => round.id === id);
    setSavedRounds(updatedList);
    deleteRound(id);
  };

  return {
    rounds,
    setRounds,
    updateRound,
    addRound,
    removeRound,
  } as const;
}
