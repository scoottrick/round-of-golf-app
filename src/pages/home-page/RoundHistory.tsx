import { FC } from 'react';
import { GolfRound } from '../../model/GolfRound';
import NoHistoryMessage from './NoHistoryMessage';
import RoundHistoryCard from './RoundHistoryCard';
import { Golfer } from '../../model/Golfer';
import { getParticipatingGolfers } from '../../data/rounds';
import { DivComponent } from '../../components/component-utils';

interface Props extends DivComponent {
  rounds: GolfRound[];
  golfers: Golfer[];
  collapsed?: boolean;
}
const RoundHistory: FC<Props> = ({ rounds, golfers, className }) => {
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
    <section>
      <header className="px-2 pt-4">
        <h2>Previous Rounds</h2>
      </header>
      <ul className="p-2 border-box w-full overflow-x-scroll whitespace-nowrap">
        {listItems}
      </ul>
    </section>
  );
};
export default RoundHistory;
