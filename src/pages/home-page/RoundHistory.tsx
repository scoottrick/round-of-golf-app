import React, { FC } from 'react';
import { GolfRound } from '../../model/GolfRound';
import NoHistoryMessage from './NoHistoryMessage';
import GolfRoundCard from './GolfRoundCard';
import { Golfer } from '../../model/Golfer';
import { getParticipatingGolfers } from '../../data/rounds';

interface Props {
  rounds: GolfRound[];
  golfers: Golfer[];
}
const RoundHistory: FC<Props> = ({ rounds, golfers }) => {
  const roundList = rounds.sort((a, b) => b.timestamp - a.timestamp);

  if (!rounds || !rounds.length) {
    return <NoHistoryMessage />;
  }

  const listItems = roundList.map(r => (
    <li key={r.id} className="mb-2 last:mb-0 max-w-xl mx-auto">
      <GolfRoundCard round={r} golfers={getParticipatingGolfers(r, golfers)} />
    </li>
  ));
  return <ul>{listItems}</ul>;
};
export default RoundHistory;
