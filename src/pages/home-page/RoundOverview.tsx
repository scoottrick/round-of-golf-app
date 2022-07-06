import React, { FC } from 'react';
import { GolfRound, GolfUtils } from '../../model/golf';

interface Props {
  round: GolfRound;
  showWinner?: boolean;
}
const RoundOverview: FC<Props> = ({ round, showWinner }) => {
  const { date, golfers, course } = round;
  const courseName = course.name || `${course.holes.length} Holes`;
  const dateText = new Date(date).toLocaleDateString();
  const golferNames = golfers.map(golfer => golfer.name).join(', ');
  const winners = GolfUtils.findRoundWinners(round);
  const winnerText = winners.length === 1 ? winners[0].name : 'Draw';

  const winnerHidden = !round.completed && !showWinner;

  return (
    <div className="shadow py-4 px-6">
      <div className="flex flex-row justify-between mb-2">
        <span className="text-2xl font-bold">{courseName}</span>
        <span className="text-sm">{dateText}</span>
      </div>
      <p>
        Golfers: <span className="italic">{golferNames}</span>
      </p>
      <p data-app-hidden={winnerHidden}>
        Winner: <span className="italic">{winnerText}</span>
      </p>
    </div>
  );
};
export default RoundOverview;
