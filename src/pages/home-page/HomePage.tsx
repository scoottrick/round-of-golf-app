import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ControlPanel, PageContent, PageLayout } from '../../components';
import {
  useDeleteGolfRound,
  useGolfers,
  useGolfRounds,
} from '../../data/GolfRoundsContext';
import { GolfRound } from '../../model/GolfRound';
import { AppRoutes } from '../../model/routes';
import NewRoundButton from './NewRoundButton';
import RoundHistory from './RoundHistory';

const HomePage = () => {
  const goTo = useNavigate();
  const rounds = useGolfRounds();
  const golfers = useGolfers();
  const deleteGolfRound = useDeleteGolfRound();

  const startNewRound = () => {
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
        <RoundHistory
          rounds={rounds}
          golfers={golfers}
          roundSelected={r => openScorecard(r)}
          roundDeleted={r => deleteRound(r)}
        />
      </PageContent>
      <ControlPanel>
        <NewRoundButton onClick={() => startNewRound()} />
      </ControlPanel>
    </PageLayout>
  );
};
export default HomePage;
