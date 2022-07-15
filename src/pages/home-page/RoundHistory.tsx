import React, { FC } from 'react';
import { GolfRound } from '../../model/GolfRound';
import NoHistoryMessage from './NoHistoryMessage';
import RoundHistoryCard from './RoundHistoryCard';
import { Golfer } from '../../model/Golfer';
import { getParticipatingGolfers } from '../../data/rounds';

interface Props {
  rounds: GolfRound[];
  golfers: Golfer[];
}
const RoundHistory: FC<Props> = ({ rounds, golfers }) => {
  const sortedRounds = rounds.sort((a, b) => b.timestamp - a.timestamp);

  if (!rounds || !rounds.length) {
    return <NoHistoryMessage />;
  }

  const listItems = sortedRounds.map(r => (
    <li key={r.id} className="mb-2 last:mb-0 max-w-xl mx-auto">
      <RoundHistoryCard
        round={r}
        golfers={getParticipatingGolfers(r, golfers)}
      />
    </li>
  ));
  return <ul>{listItems}</ul>;
};
export default RoundHistory;
