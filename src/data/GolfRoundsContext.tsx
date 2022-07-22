import React from 'react';
import { useParams } from 'react-router-dom';
import { GolfRound, GolfRoundId } from '../model/GolfRound';
import { deleteRound } from '../data/rounds';
import { Golfer } from '../model/Golfer';
import { useSavedGolfers } from '../hooks/useSavedGolfers';
import { useSavedRounds } from '../hooks/useSavedRounds';

const RoundsContext = React.createContext([] as GolfRound[]);
const SetRoundsContext = React.createContext((rounds: GolfRound[]) => {});
const UpdateRoundContext = React.createContext((round: GolfRound) => {});
const AddRoundContext = React.createContext((round: GolfRound) => {});
const DeleteRoundContext = React.createContext((round: GolfRound) => {});

const GolfersContext = React.createContext([] as Golfer[]);
const SetGolfersContext = React.createContext((golfers: Golfer[]) => {});
const AddGolfersContext = React.createContext((golfers: Golfer[]) => {});
const DeleteGolfersContext = React.createContext((golfers: Golfer[]) => {});

export function useGolfRounds() {
  return React.useContext(RoundsContext);
}

export function useSetGolfRounds() {
  return React.useContext(SetRoundsContext);
}

export function useAddGolfRound() {
  return React.useContext(AddRoundContext);
}

export function useDeleteGolfRound() {
  return React.useContext(DeleteRoundContext);
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

export const GolfersProvider = ({ children }) => {
  const { golfers, setGolfers, addGolfers, removeGolfers } = useSavedGolfers();

  return (
    <GolfersContext.Provider value={golfers}>
      <SetGolfersContext.Provider value={golfers => setGolfers(golfers)}>
        <AddGolfersContext.Provider value={golfers => addGolfers(golfers)}>
          <DeleteGolfersContext.Provider
            value={golfers => removeGolfers(golfers.map(g => g.id))}
          >
            {children}
          </DeleteGolfersContext.Provider>
        </AddGolfersContext.Provider>
      </SetGolfersContext.Provider>
    </GolfersContext.Provider>
  );
};

export const RoundsProvider = ({ children }) => {
  const { rounds, addRound, updateRound, removeRound } = useSavedRounds();

  return (
    <RoundsContext.Provider value={rounds}>
      <UpdateRoundContext.Provider value={round => updateRound(round)}>
        <AddRoundContext.Provider value={round => addRound(round)}>
          <DeleteRoundContext.Provider value={round => removeRound(round.id)}>
            {children}
          </DeleteRoundContext.Provider>
        </AddRoundContext.Provider>
      </UpdateRoundContext.Provider>
    </RoundsContext.Provider>
  );
};

export const AppProvider = ({ children }) => {
  return (
    <GolfersProvider>
      <RoundsProvider>{children}</RoundsProvider>
    </GolfersProvider>
  );
};

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
    deleteRound(deletedRound.id);
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
    <RoundsContext.Provider value={rounds}>
      <SetRoundsContext.Provider value={rounds => setGolfRounds(rounds)}>
        <AddRoundContext.Provider value={round => addGolfRound(round)}>
          <DeleteRoundContext.Provider value={round => deleteGolfRound(round)}>
            <GolfersContext.Provider value={golfers}>
              <SetGolfersContext.Provider value={setGolfers}>
                <AddGolfersContext.Provider value={addGolfers}>
                  <DeleteGolfersContext.Provider value={deleteGolfers}>
                    {children}
                  </DeleteGolfersContext.Provider>
                </AddGolfersContext.Provider>
              </SetGolfersContext.Provider>
            </GolfersContext.Provider>
          </DeleteRoundContext.Provider>
        </AddRoundContext.Provider>
      </SetRoundsContext.Provider>
    </RoundsContext.Provider>
  );
};
