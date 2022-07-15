import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ControlPanel, PageContent, PageLayout } from '../../components';
import { useGolfers, useGolfRounds } from '../../data/GolfRoundsContext';
import { AppRoutes } from '../../model/routes';
import NewRoundButton from './NewRoundButton';
import RoundHistory from './RoundHistory';

const HomePage = () => {
  const goTo = useNavigate();
  const rounds = useGolfRounds();
  const golfers = useGolfers();

  const startNewRound = () => {
    goTo(AppRoutes.roundSetup);
  };

  return (
    <PageLayout className="bg-gray-200">
      <PageContent>
        <RoundHistory rounds={rounds} golfers={golfers} />
      </PageContent>
      <ControlPanel className="bg-white">
        <NewRoundButton onClick={() => startNewRound()} />
      </ControlPanel>
    </PageLayout>
  );
};
export default HomePage;
