import React from 'react';
import RoundControls from './RoundControls';
import RoundDetails from './RoundDetails';

const GolfRoundCard = ({ round, onRoundOpen, onRoundDelete }) => {
  return (
    <div className="shadow py-4 px-8" onClick={onRoundOpen}>
      <RoundDetails
        date={round.date}
        golfers={round.golfers}
        course={round.course}
      />
      <RoundControls onDelete={onRoundDelete} />
    </div>
  );
};

export default GolfRoundCard;
