import React, { FC } from 'react';
import { GolfRound } from '../../model/golf';

interface Props {
  round: GolfRound;
}
const RoundOverview: FC<Props> = ({ round }) => {
  const { date, golfers, course } = round;
  const courseName = course.name || `${course.holes.length} Holes`;
  const dateString = new Date(date).toLocaleDateString();
  const title = `${courseName}: ${dateString}`;
  const golferNames = golfers.map(golfer => golfer.name).join(', ');

  return (
    <div className="round-overview uk-box-shadow-small">
      <h5>{title}</h5>
      <p>Golfers: {golferNames}</p>
    </div>
  );
};
export default RoundOverview;
