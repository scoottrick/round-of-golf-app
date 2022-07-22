import { createContext, FC, ReactNode, useContext } from 'react';
import { GolfRound, GolfRoundId } from '../model/GolfRound';
import { useSavedRounds } from '../hooks/useSavedRounds';

const RoundsContext = createContext([] as GolfRound[]);
const SetRoundsContext = createContext((rounds: GolfRound[]) => {});
const UpdateRoundContext = createContext((round: GolfRound) => {});
const AddRoundContext = createContext((round: GolfRound) => {});
const DeleteRoundContext = createContext((id: GolfRoundId) => {});

export function useGolfRounds() {
  return useContext(RoundsContext);
}

export function useSetGolfRounds() {
  return useContext(SetRoundsContext);
}

export function useAddGolfRound() {
  return useContext(AddRoundContext);
}

export function useDeleteGolfRound() {
  return useContext(DeleteRoundContext);
}

interface Props {
  children: ReactNode;
}
export const RoundsProvider: FC<Props> = ({ children }) => {
  const { rounds, addRound, updateRound, removeRound } = useSavedRounds();

  return (
    <RoundsContext.Provider value={rounds}>
      <UpdateRoundContext.Provider value={round => updateRound(round)}>
        <AddRoundContext.Provider value={round => addRound(round)}>
          <DeleteRoundContext.Provider value={id => removeRound(id)}>
            {children}
          </DeleteRoundContext.Provider>
        </AddRoundContext.Provider>
      </UpdateRoundContext.Provider>
    </RoundsContext.Provider>
  );
};
