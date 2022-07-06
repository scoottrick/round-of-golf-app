import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ControlPanel,
  PageContent,
  PageLayout,
  RectButton,
} from '../../components';
import { GolfUtils } from '../../model/golf';
import { AppRoutes } from '../../model/routes';
import RoundList from './RoundList';

const mockGolfers = GolfUtils.createGolfers(['Tom', 'Dick', 'Harry']);
const mockCourse = GolfUtils.newPar3Course('Lunar Lake', 9);
const mockRound = GolfUtils.newRound(mockGolfers, mockCourse);

const HomePage = () => {
  const goTo = useNavigate();
  const rounds = [mockRound];

  const playRoundClicked = () => {
    goTo(AppRoutes.roundSetup);
  };

  return (
    <PageLayout>
      <PageContent>
        <RoundList rounds={rounds} />
      </PageContent>
      <ControlPanel>
        <RectButton onClick={() => playRoundClicked()}>Play a Round</RectButton>
      </ControlPanel>
    </PageLayout>
  );
};
export default HomePage;
