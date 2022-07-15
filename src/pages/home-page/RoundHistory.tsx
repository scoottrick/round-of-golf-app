import { FC, useEffect, useRef } from 'react';
import { GolfRound } from '../../model/GolfRound';
import NoHistoryMessage from './NoHistoryMessage';
import RoundHistoryCard from './RoundHistoryCard';
import { Golfer } from '../../model/Golfer';
import { getParticipatingGolfers } from '../../data/rounds';
import { SectionComponent } from '../../components/component-utils';

interface Props extends SectionComponent {
  rounds: GolfRound[];
  golfers: Golfer[];
}
const RoundHistory: FC<Props> = ({ rounds, golfers }) => {
  const sortedRounds = rounds.sort((a, b) => b.timestamp - a.timestamp);

  if (!rounds || !rounds.length) {
    return <NoHistoryMessage />;
  }

  const listItems = sortedRounds.map(r => (
    <li key={r.id} className="my-2 ml-2 last:mr-2 inline-block">
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
      <ul className="w-full border-box overflow-x-scroll whitespace-nowrap">
        {listItems}
      </ul>
    </section>
  );
};
export default RoundHistory;
