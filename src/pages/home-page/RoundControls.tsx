import React, { MouseEventHandler } from 'react';
import { TrashIcon } from '@heroicons/react/outline';
import { Button } from '../../components';

type ClickEventHandler = MouseEventHandler<HTMLButtonElement>;

const RoundControls = ({ onDelete }) => {
  const emitDelete: ClickEventHandler = event => {
    event.stopPropagation();
    onDelete();
  };

  return (
    <div className="text-right">
      <Button onClick={e => emitDelete(e)} outline color="red">
        <TrashIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default RoundControls;
