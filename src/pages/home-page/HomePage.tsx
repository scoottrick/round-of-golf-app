import { FC } from 'react';
import { useGolfers, useGolfRounds } from '../../data/GolfRoundsContext';
import NewRound from './NewRound';
import RoundHistory from './RoundHistory';
import { Page } from '../../components/Page';

const HomePage: FC = () => {
  const rounds = useGolfRounds();
  const golfers = useGolfers();

  return (
    <Page className="flex flex-col">
      <RoundHistory rounds={rounds} golfers={golfers} />
      <NewRound className="grow" />
    </Page>
  );
};

export default HomePage;
