import React, { FC } from 'react';
import { Golfer } from '../../model/Golfer';
import { GolfRound } from '../../model/GolfRound';
import RoundControls from './RoundControls';
import RoundDetails from './RoundDetails';

interface Props {
  round: GolfRound;
  golfers: Golfer[];
  onOpen: () => void;
  onDelete: () => void;
}
const GolfRoundCard: FC<Props> = ({ round, golfers, onOpen, onDelete }) => {
  return (
    <div
      className="py-4 px-8 relative rounded-sm cursor-pointer shadow-sm hover:shadow"
      onClick={onOpen}
    >
      <RoundDetails
        timestamp={round.timestamp}
        golfers={golfers}
        course={round.course}
      />
      <RoundControls onDelete={onDelete} />
    </div>
  );
};

export default GolfRoundCard;
