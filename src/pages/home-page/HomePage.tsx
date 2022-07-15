import { FC } from 'react';
import { useGolfers, useGolfRounds } from '../../data/GolfRoundsContext';
import NewRound from './NewRound';
import RoundHistory from './RoundHistory';
import { Page } from '../../components/Page';

const HomePage: FC = () => {
  const rounds = useGolfRounds();
  const golfers = useGolfers();

  return (
    <Page>
      <RoundHistory rounds={rounds} golfers={golfers} />
      <NewRound />
    </Page>
  );
};

export default HomePage;
