import { PlusIcon } from '@heroicons/react/outline';
import { FC } from 'react';
import { TextButton } from '../../components';
import { ButtonComponent } from '../../components/component-utils';

interface Props extends ButtonComponent {}
const AddGolferButton: FC<Props> = ({ onClick, className }) => {
  return (
    <TextButton onClick={onClick} className={className || ''}>
      <PlusIcon className="w-6 inline" />
    </TextButton>
  );
};

export default AddGolferButton;
