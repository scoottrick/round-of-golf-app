import React from 'react';
import { useParams } from 'react-router-dom';
import { GolfRound } from '../model/golf';

const GolfRoundsContext = React.createContext([] as GolfRound[]);
const SetGolfRoundsContext = React.createContext((_: GolfRound[]) => {});
const AddGolfRoundContext = React.createContext((_: GolfRound) => {});

export function useGolfRounds() {
  return React.useContext(GolfRoundsContext);
}

export function useSetGolfRounds() {
  return React.useContext(SetGolfRoundsContext);
}

export function useAddGolfRound() {
  return React.useContext(AddGolfRoundContext);
}

export function useCurrentRound() {
  const golfRounds = useGolfRounds();
  const setGolfRounds = useSetGolfRounds();
  const currentId = useParams().roundId || '';
  const currentIndex = golfRounds.findIndex(r => r.id === currentId);
  const current = golfRounds[currentIndex];

  const setCurrent = (round: GolfRound) => {
    golfRounds[currentIndex] = round;
    setGolfRounds(golfRounds);
  };

  return [current, setCurrent] as [GolfRound, (round: GolfRound) => void];
}

interface Props {
  rounds: GolfRound[];
  roundsUpdated: (rounds: GolfRound[]) => void;
  children: React.ReactNode;
}
export const GolfRoundsProvider: React.FC<Props> = ({
  rounds,
  roundsUpdated,
  children,
}) => {
  const setRounds = (newValue: GolfRound[]) => {
    roundsUpdated([...newValue]);
  };

  const addRound = (newRound: GolfRound) => {
    roundsUpdated([newRound, ...rounds]);
  };

  return (
    <GolfRoundsContext.Provider value={rounds}>
      <SetGolfRoundsContext.Provider value={rounds => setRounds(rounds)}>
        <AddGolfRoundContext.Provider value={round => addRound(round)}>
          {children}
        </AddGolfRoundContext.Provider>
      </SetGolfRoundsContext.Provider>
    </GolfRoundsContext.Provider>
  );
};
