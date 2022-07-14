import React from 'react';
import { MinusIcon } from '@heroicons/react/outline';
import { Button } from '../../components';

const RemoveGolferButton = ({ hidden, onClick }) => {
  return (
    <Button
      data-app-hidden={hidden}
      className="ml-8"
      onClick={onClick}
      color="red"
    >
      <MinusIcon className="w-4 h-4" />
    </Button>
  );
};

export default RemoveGolferButton;
