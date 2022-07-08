import * as React from 'react';
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
