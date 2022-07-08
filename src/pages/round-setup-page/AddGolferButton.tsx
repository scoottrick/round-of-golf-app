import React from 'react';
import { PlusIcon } from '@heroicons/react/outline';
import { IconButton } from '../../components';

const AddGolferButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <PlusIcon className="w-4 h-4" />
    </IconButton>
  );
};

export default AddGolferButton;
