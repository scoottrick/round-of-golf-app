import React, { FC, ReactNode } from 'react';
import { Golfer } from '../../model/Golfer';
import { GolfRound } from '../../model/GolfRound';
import { GolfScorecard } from '../../model/GolfScorecard';

const ScorecardCell = ({ children, className }) => (
  <td
    className={`text-center p-2 min-w-20 flex flex-row justify-center items-center ${className}`}
  >
    {children}
  </td>
);

const ScorecardRow = ({ shade, children, className }) => {
  const shadeClass = shade ? 'bg-gray-300 focus-within:bg-gray-400' : '';
  return (
    <tr
      className={`max-h-20 flex flex-row justify-between ${shadeClass} ${className}`}
    >
      {children}
    </tr>
  );
};

const ScoreInput = ({ value, updated }) => {
  const selectText = el => el.setSelectionRange(0, el.value.length);

  return (
    <input
      className="bg-transparent text-center w-full h-full"
      type="text"
      inputMode="numeric"
      size={2}
      value={value || '--'}
      onChange={e => updated(e.target.value)}
      onFocus={e => selectText(e.target)}
    />
  );
};

interface ScoreRowProps {
  holeIndex: number;
  scoreData: { golferId: string; name: string; strokes: number[] }[];
  scoreUpdated: (golferId: string, holeIndex: number, score: number) => void;
}
const ScoreRow: FC<ScoreRowProps> = ({
  holeIndex,
  scoreData: scoreData,
  scoreUpdated,
}) => {
  const isOddRow = holeIndex % 2 !== 0;
  const cells = scoreData.map(data => {
    return (
      <ScorecardCell
        key={data.golferId}
        className="flex-1 border-gray-700 border-r last:border-r-0"
      >
        <ScoreInput
          value={data.strokes[holeIndex]}
          updated={score => scoreUpdated(data.golferId, holeIndex, score)}
        />
      </ScorecardCell>
    );
  });
  return (
    <ScorecardRow shade={isOddRow} className="flex-1">
      <ScorecardCell className="border-gray-700 border-r-2">
        {holeIndex + 1}
      </ScorecardCell>
      {cells}
    </ScorecardRow>
  );
};

const ScorecardHeader = ({ names }) => {
  const cells = names.map((name, i) => {
    return (
      <ScorecardCell
        key={i}
        className="py-4 flex-1 border-gray-700 border-r last:border-r-0"
      >
        {name}
      </ScorecardCell>
    );
  });
  return (
    <ScorecardRow shade={false} className="border-b-2 border-gray-700">
      <ScorecardCell className="py-4 border-gray-700 border-r-2">
        Hole #
      </ScorecardCell>
      {cells}
    </ScorecardRow>
  );
};

interface Props {
  round: GolfRound;
  golfers: Golfer[];
  scoresUpdated: (scorecard: GolfScorecard) => void;
}
const ScoreGrid: FC<Props> = ({ round, golfers, scoresUpdated }) => {
  const { scorecard, course } = round;
  const scoreData = golfers.map(golfer => {
    return {
      golferId: golfer.id,
      name: golfer.name,
      strokes: scorecard[golfer.id],
    };
  });

  function updateScore(golferId: string, holeIndex: number, score: number) {
    scorecard[golferId][holeIndex] = score;
    scoresUpdated(scorecard);
  }

  const rows = [] as JSX.Element[];
  for (let i = 0; i < course.holeCount; i++) {
    rows.push(
      <ScoreRow
        key={i}
        holeIndex={i}
        scoreData={scoreData}
        scoreUpdated={updateScore}
      />
    );
  }
  return (
    <table className="min-h-full flex flex-col">
      <thead>
        <ScorecardHeader names={scoreData.map(data => data.name)} />
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ScoreGrid;
