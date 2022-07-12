import React, { FC } from 'react';
import { GolfRound } from '../../model/golf';
import NoHistoryMessage from './NoHistoryMessage';
import GolfRoundCard from './GolfRoundCard';

interface Props {
  rounds: GolfRound[];
  roundSelected: (round: GolfRound) => void;
  roundDeleted: (round: GolfRound) => void;
}
const RoundList: FC<Props> = ({ rounds, roundSelected, roundDeleted }) => {
  const roundList = rounds.sort((a, b) => b.date - a.date);

  if (!rounds || !rounds.length) {
    return <NoHistoryMessage />;
  }

  const listItems = roundList.map(r => (
    <li key={r.id}>
      <GolfRoundCard
        round={r}
        onRoundOpen={() => roundSelected(r)}
        onRoundDelete={() => roundDeleted(r)}
      />
    </li>
  ));
  return <ul>{listItems}</ul>;
};
export default RoundList;
