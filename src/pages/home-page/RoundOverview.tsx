import React, { FC } from 'react';
import { GrClose } from 'react-icons/gr';
import { IconButton, RectButton } from '../../components';
import { GolfRound, GolfUtils } from '../../model/golf';

interface Props {
  round: GolfRound;
  deleteClicked: () => void;
  showWinner?: boolean;
}
const RoundOverview: FC<Props> = ({ round, showWinner, deleteClicked }) => {
  const { date, golfers, course } = round;
  const courseName = course.name || `${course.holes.length} Holes`;
  const dateText = new Date(date).toLocaleTimeString();
  const golferNames = golfers.map(golfer => golfer.name).join(', ');
  const winners = GolfUtils.findRoundWinners(round);
  const winnerText = winners.length === 1 ? winners[0].name : 'Draw';

  const winnerHidden = !round.completed && !showWinner;

  return (
    <div className="shadow py-4 px-8 select-none">
      <div className="flex flex-row justify-between mb-2">
        <div className="text-2xl font-bold">{courseName}</div>
        <div className="text-sm">{dateText}</div>
      </div>
      <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
        Golfers: <i className="italic">{golferNames}</i>
      </p>
      <p data-app-hidden={winnerHidden}>
        Winner: <span className="italic">{winnerText}</span>
      </p>
      <div className="text-right">
        <IconButton onClick={() => deleteClicked()}>
          <GrClose />
        </IconButton>
      </div>
    </div>
  );
};
export default RoundOverview;
