import React from 'react';
import { MinusIcon } from '@heroicons/react/outline';
import { IconButton } from '../../components';

const RemoveGolferButton = ({ hidden, onClick }) => {
  return (
    <IconButton data-app-hidden={hidden} className="ml-8" onClick={onClick}>
      <MinusIcon className="w-4 h-4" />
    </IconButton>
  );
};

export default RemoveGolferButton;
