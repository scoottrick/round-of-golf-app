import { FC } from 'react';
import { DivComponent } from '../../components/component-utils';
import { useGolfers, useGolfRounds } from '../../data/GolfRoundsContext';
import NewRound from './NewRound';
import RoundHistory from './RoundHistory';

const HomePage = () => {
  const rounds = useGolfRounds();
  const golfers = useGolfers();

  return (
    <Page>
      <RoundHistory rounds={rounds} golfers={golfers} />
      <NewRound />
    </Page>
  );
};

interface PageProps extends DivComponent {}
const Page: FC<PageProps> = ({ children, className, ...props }) => {
  const bgColor = 'bg-gray-200 dark:bg-gray-800';
  return (
    <div className={`h-full w-full ${bgColor} ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

export default HomePage;
