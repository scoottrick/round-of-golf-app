import React, { ReactNode } from 'react';

const ScorecardCell = ({ children, className }) => (
  <span
    className={`text-center p-2 min-w-20 flex flex-row justify-center items-center ${className}`}
  >
    {children}
  </span>
);

const ScorecardRow = ({ shade, children, className }) => {
  const shadeClass = shade ? 'bg-gray-300 focus-within:bg-gray-400' : '';
  return (
    <li
      className={`max-h-20 flex flex-row justify-between ${shadeClass} ${className}`}
    >
      {children}
    </li>
  );
};

const ScoreCell = ({ value, updated }) => {
  const selectText = el => el.setSelectionRange(0, el.value.length);

  return (
    <ScorecardCell className="flex-1 border-gray-700 border-r last:border-r-0">
      <input
        className="bg-transparent text-center w-full h-full"
        type="text"
        inputMode="numeric"
        size={2}
        value={value || '--'}
        onChange={e => updated(e.target.value)}
        onFocus={e => selectText(e.target)}
      />
    </ScorecardCell>
  );
};

const HoleRow = ({ rowIndex, golfers, scoreUpdated }) => {
  const isOddRow = rowIndex % 2 !== 0;
  return (
    <ScorecardRow shade={isOddRow} className="flex-1">
      <ScorecardCell className="border-gray-700 border-r-2">
        {rowIndex + 1}
      </ScorecardCell>
      {golfers.map((g, i) => (
        <ScoreCell
          key={g.id}
          value={g.scores[rowIndex]}
          updated={score => scoreUpdated(score, i)}
        />
      ))}
    </ScorecardRow>
  );
};

const HeaderRow = ({ golfers }) => {
  return (
    <ScorecardRow shade={false} className="border-b-2 border-gray-700">
      <ScorecardCell className="py-4 border-gray-700 border-r-2">
        Hole #
      </ScorecardCell>
      {golfers.map((g, i) => (
        <ScorecardCell
          key={i}
          className="py-4 flex-1 border-gray-700 border-r last:border-r-0"
        >
          {g.name}
        </ScorecardCell>
      ))}
    </ScorecardRow>
  );
};

const ScoreGrid = ({ holeCount, golfers, scoreUpdated }) => {
  const scoreRows = [] as ReactNode[];
  for (let i = 0; i < holeCount; i++) {
    scoreRows.push(
      <HoleRow
        key={i}
        rowIndex={i}
        golfers={golfers}
        scoreUpdated={(score, golferIndex) =>
          scoreUpdated(score, golferIndex, i)
        }
      />
    );
  }
  return (
    <ul className="min-h-full flex flex-col">
      <HeaderRow golfers={golfers} />
      {scoreRows}
    </ul>
  );
};

export default ScoreGrid;
