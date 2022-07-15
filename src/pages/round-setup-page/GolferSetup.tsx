import { FC } from 'react';
import AddGolferButton from './AddGolferButton';
import GolferList from './GolferList';
import PageSection from './PageSection';

interface Props {
  golferNames: string[];
  onNamesUpdated: (names: string[]) => void;
}
const GolferSetup: FC<Props> = ({ golferNames, onNamesUpdated }) => {
  const addClicked = () => {
    onNamesUpdated([...golferNames, '']);
  };

  return (
    <PageSection>
      <header className="flex flex-row justify-between items-start mb-8">
        <h1 className="text-3xl mt-4 flex-1">Golfers</h1>
        <AddGolferButton onClick={() => addClicked()} />
      </header>
      <GolferList names={golferNames} namesUpdated={onNamesUpdated} />
    </PageSection>
  );
};

export default GolferSetup;
