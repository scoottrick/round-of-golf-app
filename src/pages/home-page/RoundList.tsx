import React, { FC } from 'react';
import { GolfRound } from '../../model/golf';
import RoundOverview from './RoundOverview';

const NoRoundsMessage: FC = () => (
  <div className="h-full flex flex-col justify-center pb-32">
    <p className="text-center text-2xl">Start a new round below.</p>
    <p className="text-center text-lg mt-8">
      As you play, the results of your rounds will be displayed here.
    </p>
  </div>
);

interface Props {
  rounds: GolfRound[];
  roundSelected: (round: GolfRound) => void;
  roundDeleted: (round: GolfRound) => void;
}
const RoundList: FC<Props> = ({ rounds, roundSelected, roundDeleted }) => {
  const roundList = rounds.sort((a, b) => b.date - a.date);

  if (!rounds.length) {
    return <NoRoundsMessage />;
  }

  const listItems = roundList.map(r => (
    <li key={r.id} onClick={() => roundSelected(r)}>
      <RoundOverview
        round={r}
        showWinner={false}
        deleteClicked={() => roundDeleted(r)}
      />
    </li>
  ));
  return <ul>{listItems}</ul>;
};
export default RoundList;
