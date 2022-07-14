import React, { FC } from 'react';
import { GolfRound } from '../../model/GolfRound';
import NoHistoryMessage from './NoHistoryMessage';
import GolfRoundCard from './GolfRoundCard';
import { Golfer } from '../../model/Golfer';
import { getParticipatingGolfers } from '../../data/rounds';

interface Props {
  rounds: GolfRound[];
  golfers: Golfer[];
  roundSelected: (round: GolfRound) => void;
  roundDeleted: (round: GolfRound) => void;
}
const RoundHistory: FC<Props> = ({
  rounds,
  golfers,
  roundSelected,
  roundDeleted,
}) => {
  const roundList = rounds.sort((a, b) => b.timestamp - a.timestamp);

  if (!rounds || !rounds.length) {
    return <NoHistoryMessage />;
  }

  const listItems = roundList.map(r => (
    <li key={r.id}>
      <GolfRoundCard
        round={r}
        golfers={getParticipatingGolfers(r, golfers)}
        onOpen={() => roundSelected(r)}
        onDelete={() => roundDeleted(r)}
      />
    </li>
  ));
  return <ul>{listItems}</ul>;
};
export default RoundHistory;
