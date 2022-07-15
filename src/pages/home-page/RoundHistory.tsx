import { FC } from 'react';
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
    <li key={r.id} className="m-2 inline-block">
      <RoundHistoryCard
        round={r}
        golfers={getParticipatingGolfers(r, golfers)}
      />
    </li>
  ));
  return (
    <>
      <div className="px-2 pt-4">
        <h2>Previous Rounds</h2>
      </div>
      <ul className="p-2 border-box w-full overflow-x-scroll whitespace-nowrap">
        {listItems}
      </ul>
    </>
  );
};
export default RoundHistory;
