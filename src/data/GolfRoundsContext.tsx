import React from 'react';
import { useParams } from 'react-router-dom';
import { GolfRound } from '../model/GolfRound';
import { deleteRound } from '../data/rounds';
import { Golfer } from '../model/Golfer';

const GolfRoundsContext = React.createContext([] as GolfRound[]);
const SetGolfRoundsContext = React.createContext((_: GolfRound[]) => {});
const AddGolfRoundContext = React.createContext((_: GolfRound) => {});
const DeleteGolfRoundContext = React.createContext((_: GolfRound) => {});
const GolfersContext = React.createContext([] as Golfer[]);
const SetGolfersContext = React.createContext((_: Golfer[]) => {});
const AddGolfersContext = React.createContext((_: Golfer[]) => {});
const DeleteGolfersContext = React.createContext((_: Golfer[]) => {});

export function useGolfRounds() {
  return React.useContext(GolfRoundsContext);
}

export function useSetGolfRounds() {
  return React.useContext(SetGolfRoundsContext);
}

export function useAddGolfRound() {
  return React.useContext(AddGolfRoundContext);
}

export function useDeleteGolfRound() {
  return React.useContext(DeleteGolfRoundContext);
}

export function useGolfers() {
  return React.useContext(GolfersContext);
}

export function useSetGolfers() {
  return React.useContext(SetGolfersContext);
}

export function useAddGolfers() {
  return React.useContext(AddGolfersContext);
}

export function useDeleteGolfers() {
  return React.useContext(DeleteGolfersContext);
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
  golfers: Golfer[];
  golfersUpdated: (golfers: Golfer[]) => void;
  children: React.ReactNode;
}
export const GolfRoundsProvider: React.FC<Props> = ({
  rounds,
  roundsUpdated,
  golfers,
  golfersUpdated,
  children,
}) => {
  const setGolfRounds = (newValue: GolfRound[]) => {
    roundsUpdated([...newValue]);
  };

  const addGolfRound = (newRound: GolfRound) => {
    roundsUpdated([newRound, ...rounds]);
  };

  const deleteGolfRound = (deletedRound: GolfRound) => {
    roundsUpdated(rounds.filter(r => r.id !== deletedRound.id));
    deleteRound(deletedRound);
  };

  const setGolfers = (newValue: Golfer[]) => {
    golfersUpdated([...newValue]);
  };

  const addGolfers = (newGolfers: Golfer[]) => {
    golfersUpdated([...golfers, ...newGolfers]);
  };

  const deleteGolfers = (deletedGolfers: Golfer[]) => {
    golfersUpdated(
      golfers.filter(g => deletedGolfers.every(deleted => deleted.id !== g.id))
    );
  };

  return (
    <GolfRoundsContext.Provider value={rounds}>
      <SetGolfRoundsContext.Provider value={rounds => setGolfRounds(rounds)}>
        <AddGolfRoundContext.Provider value={round => addGolfRound(round)}>
          <DeleteGolfRoundContext.Provider
            value={round => deleteGolfRound(round)}
          >
            <GolfersContext.Provider value={golfers}>
              <SetGolfersContext.Provider value={setGolfers}>
                <AddGolfersContext.Provider value={addGolfers}>
                  <DeleteGolfersContext.Provider value={deleteGolfers}>
                    {children}
                  </DeleteGolfersContext.Provider>
                </AddGolfersContext.Provider>
              </SetGolfersContext.Provider>
            </GolfersContext.Provider>
          </DeleteGolfRoundContext.Provider>
        </AddGolfRoundContext.Provider>
      </SetGolfRoundsContext.Provider>
    </GolfRoundsContext.Provider>
  );
};
