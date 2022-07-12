import React from 'react';
import { TrashIcon } from '@heroicons/react/outline';
import { IconButton } from '../../components';

const RoundControls = ({ onDelete }) => {
  return (
    <div className="text-right">
      <IconButton onClick={onDelete}>
        <TrashIcon className="w-4 h-4" />
      </IconButton>
    </div>
  );
};

export default RoundControls;
