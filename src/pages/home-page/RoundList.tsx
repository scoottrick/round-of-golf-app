import React, { FC } from 'react';
import { GolfRound } from '../../model/golf';
import RoundOverview from './RoundOverview';

const NoRoundsMessage: FC = () => (
  <p className="text-center text-lg mt-10">
    As you play, the results of your rounds will be displayed here.
  </p>
);

interface Props {
  rounds: GolfRound[];
  roundSelected: (round: GolfRound) => void;
}
const RoundList: FC<Props> = ({ rounds, roundSelected }) => {
  if (!rounds.length) {
    return <NoRoundsMessage />;
  }

  const listItems = rounds.map(r => (
    <li key={r.id} onClick={() => roundSelected(r)}>
      <RoundOverview round={r} showWinner={false} />
    </li>
  ));
  return <ul>{listItems}</ul>;
};
export default RoundList;
