import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ControlPanel,
  PageContent,
  PageLayout,
  RectButton,
} from '../../components';
import { useGolfRounds } from '../../data/GolfRoundsContext';
import { GolfRound } from '../../model/golf';
import { AppRoutes } from '../../model/routes';
import RoundList from './RoundList';

const HomePage = () => {
  const goTo = useNavigate();
  const rounds = useGolfRounds().sort((a, b) => b.date - a.date);

  const playRoundClicked = () => {
    goTo(AppRoutes.roundSetup);
  };

  const roundSelected = (round: GolfRound) => {
    goTo(AppRoutes.withPath(AppRoutes.scorecard, round.id));
  };

  return (
    <PageLayout>
      <PageContent>
        <RoundList rounds={rounds} roundSelected={r => roundSelected(r)} />
      </PageContent>
      <ControlPanel>
        <RectButton onClick={() => playRoundClicked()}>Play a Round</RectButton>
      </ControlPanel>
    </PageLayout>
  );
};
export default HomePage;
