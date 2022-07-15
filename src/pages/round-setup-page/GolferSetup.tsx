import { PlusIcon } from '@heroicons/react/outline';
import { FC } from 'react';
import { Button } from '../../components';
import AddGolferButton from './AddGolferButton';
import GolferList from './GolferList';
import PageSection from './PageSection';

interface Props {
  golferNames: string[];
  onNamesUpdated: (names: string[]) => void;
}
const GolferSetup: FC<Props> = ({ golferNames, onNamesUpdated }) => {
  const addName = () => {
    onNamesUpdated([...golferNames, '']);
  };

  return (
    <PageSection>
      <header className="border-box relative">
        <h1 className="text-3xl">Who's Golfing?</h1>
        <AddGolferButton
          className="absolute bottom-0 right-0"
          onClick={addName}
        />
      </header>
      <GolferList names={golferNames} namesUpdated={onNamesUpdated} />
    </PageSection>
  );
};

export default GolferSetup;
