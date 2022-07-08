import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ControlPanel,
  PageContent,
  PageLayout,
  RectButton,
} from '../../components';
import {
  useDeleteGolfRound,
  useGolfRounds,
} from '../../data/GolfRoundsContext';
import { GolfRound } from '../../model/golf';
import { AppRoutes } from '../../model/routes';
import RoundList from './RoundList';

const HomePage = () => {
  const goTo = useNavigate();
  const rounds = useGolfRounds();
  const deleteGolfRound = useDeleteGolfRound();

  const playRoundClicked = () => {
    goTo(AppRoutes.roundSetup);
  };

  const openScorecard = (round: GolfRound) => {
    goTo(AppRoutes.withPath(AppRoutes.scorecard, round.id));
  };

  const deleteRound = (round: GolfRound) => {
    deleteGolfRound(round);
  };

  return (
    <PageLayout>
      <PageContent>
        <RoundList
          rounds={rounds}
          roundSelected={r => openScorecard(r)}
          roundDeleted={r => deleteRound(r)}
        />
      </PageContent>
      <ControlPanel>
        <RectButton onClick={() => playRoundClicked()}>Play a Round</RectButton>
      </ControlPanel>
    </PageLayout>
  );
};
export default HomePage;
