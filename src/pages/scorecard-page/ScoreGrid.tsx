import React, { ReactNode } from 'react';
import { arrayOfN } from '../../model/utils';

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

const HoleRow = ({ rowIndex, golfers, scoreUpdated }) => {
  const isOddRow = rowIndex % 2 !== 0;
  const cells = [
    <ScorecardCell className="border-gray-700 border-r-2">
      {rowIndex + 1}
    </ScorecardCell>,
    ...golfers.map((g, i) => (
      <ScorecardCell
        key={g.id}
        className="flex-1 border-gray-700 border-r last:border-r-0"
      >
        <ScoreInput
          value={g.scores[rowIndex]}
          updated={score => scoreUpdated(score, i)}
        />
      </ScorecardCell>
    )),
  ];
  return (
    <ScorecardRow shade={isOddRow} className="flex-1">
      {cells}
    </ScorecardRow>
  );
};

const HeaderRow = ({ golfers }) => {
  const cells = [
    <ScorecardCell className="py-4 border-gray-700 border-r-2">
      Hole #
    </ScorecardCell>,
    ...golfers.map((g, i) => (
      <ScorecardCell
        key={i}
        className="py-4 flex-1 border-gray-700 border-r last:border-r-0"
      >
        {g.name}
      </ScorecardCell>
    )),
  ];
  return (
    <ScorecardRow shade={false} className="border-b-2 border-gray-700">
      {cells}
    </ScorecardRow>
  );
};

const ScoreGrid = ({ holeCount, golfers, scoreUpdated }) => {
  const rows = [<HeaderRow golfers={golfers} />];
  for (let i = 0; i < holeCount; i++) {
    rows.push(
      <HoleRow
        key={i}
        rowIndex={i}
        golfers={golfers}
        scoreUpdated={(score, golferIndex) => {
          scoreUpdated(score, golferIndex, i);
        }}
      />
    );
  }
  return <table className="min-h-full flex flex-col">{rows}</table>;
};

export default ScoreGrid;
