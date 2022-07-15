import { PlusIcon } from '@heroicons/react/outline';
import { Button } from '../../components';

const AddGolferButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} outline>
      <PlusIcon className="w-4 h-4" />
    </Button>
  );
};

export default AddGolferButton;
