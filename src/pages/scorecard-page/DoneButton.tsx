import React from 'react';
import { Button } from '../../components';

const DoneButton = ({ roundComplete, onClick }) => {
  return (
    <Button onClick={onClick} outline color={roundComplete && 'red'}>
      {roundComplete ? 'Done' : 'Leave'}
    </Button>
  );
};

export default DoneButton;
