import { FC } from 'react';
import { DivComponent } from '../../components/component-utils';
import AddGolferButton from './AddGolferButton';
import GolferList from './GolferList';

interface Props extends DivComponent {
  golferNames: string[];
  onNamesUpdate: (names: string[]) => void;
}
const GolferSetup: FC<Props> = ({ golferNames, onNamesUpdate, className }) => {
  const addName = () => {
    onNamesUpdate([...golferNames, '']);
  };

  return (
    <div className={className}>
      <header className="border-box flex flex-row justify-between items-start mb-8 relative">
        <h1 className="text-3xl grow">Who's Golfing?</h1>
        <AddGolferButton onClick={addName} />
      </header>
      <GolferList names={golferNames} namesUpdated={onNamesUpdate} />
    </div>
  );
};

export default GolferSetup;
