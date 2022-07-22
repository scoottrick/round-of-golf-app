import { useEffect, useState } from 'react';
import { getGolfers, saveGolfer, saveGolfers } from '../data/golfers';
import { Golfer, GolferId } from '../model/Golfer';
import { GolfRound } from '../model/GolfRound';

export function useSavedGolfers() {
  const [golfers, setSavedGolfers] = useState([] as Golfer[]);

  const saveChanges = (golferList: Golfer[]) => {
    golferList.forEach(golfer => saveGolfer(golfer));
  };

  async function loadGolfers() {
    const golfers = await getGolfers();
    setSavedGolfers(golfers);
  }

  useEffect(() => {
    loadGolfers();
  }, []);

  const setGolfers = (golferList: Golfer[]) => {
    setSavedGolfers(golferList);
    saveGolfers(golferList);
  };

  const addGolfers = (newGolfers: Golfer[]) => {
    const golferList = [...newGolfers, ...golfers];
    setSavedGolfers(golferList);
    saveGolfers(golferList);
  };

  const removeGolfers = (ids: GolferId[]) => {
    const golferList = golfers.filter(golfer =>
      ids.some(id => golfer.id === id)
    );
    setSavedGolfers(golferList);
    saveChanges(golferList);
  };

  return {
    golfers,
    setGolfers,
    addGolfers,
    removeGolfers,
  } as const;
}
