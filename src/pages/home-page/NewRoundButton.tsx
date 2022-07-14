import React from 'react';
import { Button } from '../../components';

const NewRoundButton = ({ onClick }) => {
  return <Button onClick={onClick}>Start a Round</Button>;
};

export default NewRoundButton;
