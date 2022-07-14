import React from 'react';
import { TrashIcon } from '@heroicons/react/outline';
import { Button } from '../../components';

const RoundControls = ({ onDelete }) => {
  return (
    <div className="text-right">
      <Button onClick={onDelete} outline color="red">
        <TrashIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default RoundControls;
