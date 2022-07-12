import React from 'react';
import { GolfUtils } from '../../model/golf';

const RoundDetails = ({ date, golfers, course }) => {
  const courseName = course.name || `${course.holes.length} Holes`;
  const dateText = new Date(date).toLocaleDateString();
  const golferNames = golfers.map(golfer => golfer.name).join(', ');

  const winners = GolfUtils.determineWinner(golfers);
  let winnerText = '';
  if (winners.length === 1 && golfers.length > 1) {
    winnerText = winners[0].name;
  }
  if (winners.length > 1) {
    winnerText = 'Draw';
  }

  return (
    <div className="select-none">
      <div className="flex flex-row justify-between mb-2">
        <div className="text-2xl font-bold">{courseName}</div>
        <div className="text-sm">{dateText}</div>
      </div>
      <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
        Golfers: <i className="italic">{golferNames}</i>
      </p>
      <p data-app-hidden={!winnerText.length}>
        Winner: <span className="italic">{winnerText}</span>
      </p>
    </div>
  );
};

export default RoundDetails;
