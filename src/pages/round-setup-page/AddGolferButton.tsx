import { PlusIcon } from '@heroicons/react/outline';
import { Button } from '../../components';

interface Props {
  className?: string;
  onClick: () => void;
}
const AddGolferButton = ({ onClick, className }) => {
  return (
    <Button onClick={onClick} className={className || ''} outline>
      <PlusIcon className="w-4 h-4" />
    </Button>
  );
};

export default AddGolferButton;
