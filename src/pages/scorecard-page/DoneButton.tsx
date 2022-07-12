import React from 'react';
import { RectButton } from '../../components';

const DoneButton = ({ roundComplete, onClick }) => {
  return (
    <RectButton onClick={onClick}>
      {roundComplete ? 'Done' : 'Leave'}
    </RectButton>
  );
};

export default DoneButton;
