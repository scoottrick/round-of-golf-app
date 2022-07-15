import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Golfer } from '../../model/Golfer';
import { GolfRound } from '../../model/GolfRound';
import { GolfScorecard } from '../../model/GolfScorecard';
import { AppRoutes } from '../../model/routes';

function sumArray(numbers: number[]): number {
  return numbers.reduce((total, i) => total + i, 0);
}

function calculateTotalScores(scorecard: GolfScorecard): {
  [golferId: string]: number;
} {
  return Object.keys(scorecard).reduce((result, golferId) => {
    const scores = scorecard[golferId];
    return {
      ...result,
      [golferId]: sumArray(scores),
    };
  }, {});
}

function isScorecardFull(scorecard: GolfScorecard): boolean {
  for (let golferScores of Object.values(scorecard)) {
    if (golferScores.every(s => s > 0)) {
      return false;
    }
  }
  return true;
}

function findWinners(scorecard: GolfScorecard): string[] {
  if (!isScorecardFull(scorecard)) {
    return [];
  }
  const totals = calculateTotalScores(scorecard);

  let leaders = [] as string[];
  let currentMin = -1;
  for (let golferId of Object.keys(totals)) {
    const score = totals[golferId];
    if (score <= 0) {
      leaders = [];
      break;
    }
    if (currentMin < 0) {
      currentMin = score;
      leaders.push(golferId);
      continue;
    }
    if (score < currentMin) {
      leaders = [golferId];
      currentMin = score;
    }
  }
  return leaders;
}

function getMatchStatus(round: GolfRound, golfers: Golfer[]): string {
  const winnerIds = findWinners(round.scorecard);
  const winners = winnerIds.map(id => golfers.find(g => g.id === id));
  if (winners.length === 0) {
    return 'Ongoing';
  }
  if (golfers.length) {
    return winnerIds.map(id => golfers[id].name).join(' ');
  }
  return 'Complete';
}

interface Props {
  round: GolfRound;
  golfers: Golfer[];
}
const RoundHistoryCard: FC<Props> = ({ round, golfers }) => {
  const navigate = useNavigate();

  const openRound = () => {
    navigate(AppRoutes.withPath(AppRoutes.scorecard, round.id));
  };

  const { course, timestamp } = round;
  const courseName = course.name || `${course.holeCount} Holes`;
  const dateText = new Date(timestamp).toLocaleDateString();
  const golferNames = golfers.map(golfer => golfer.name).join(', ');
  const status = getMatchStatus(round, golfers);

  return (
    <div
      className="p-4 w-44 relative rounded-sm select-none cursor-pointer shadow-sm hover:shadow bg-white"
      onClick={openRound}
    >
      <p className="absolute leading-none top-2 right-2 text-xs">{dateText}</p>
      <h2 className="text-xl font-bold">{courseName}</h2>
      <p className="text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
        <em>{golferNames}</em>
      </p>
      <p className="text-xs">
        <em>{status}</em>
      </p>
    </div>
  );
};

export default RoundHistoryCard;
