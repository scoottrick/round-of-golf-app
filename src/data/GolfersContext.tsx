import { createContext, FC, ReactNode, useContext } from 'react';
import { useSavedGolfers } from '../hooks/useSavedGolfers';
import { Golfer, GolferId } from '../model/Golfer';

const GolfersContext = createContext([] as Golfer[]);
const SetGolfersContext = createContext((golfers: Golfer[]) => {});
const AddGolfersContext = createContext((golfers: Golfer[]) => {});
const DeleteGolfersContext = createContext((ids: GolferId[]) => {});

export function useGolfers() {
  return useContext(GolfersContext);
}

export function useSetGolfers() {
  return useContext(SetGolfersContext);
}

export function useAddGolfers() {
  return useContext(AddGolfersContext);
}

export function useDeleteGolfers() {
  return useContext(DeleteGolfersContext);
}

interface Props {
  children: ReactNode;
}
export const GolfersProvider: FC<Props> = ({ children }) => {
  const { golfers, setGolfers, addGolfers, removeGolfers } = useSavedGolfers();

  return (
    <GolfersContext.Provider value={golfers}>
      <SetGolfersContext.Provider value={golfers => setGolfers(golfers)}>
        <AddGolfersContext.Provider value={golfers => addGolfers(golfers)}>
          <DeleteGolfersContext.Provider
            value={golferIds => removeGolfers(golferIds)}
          >
            {children}
          </DeleteGolfersContext.Provider>
        </AddGolfersContext.Provider>
      </SetGolfersContext.Provider>
    </GolfersContext.Provider>
  );
};
