import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout, PageContent, ControlPanel } from '../../components';
import { useCurrentRound, useGolfers } from '../../data/GolfRoundsContext';
import { getParticipatingGolfers } from '../../data/rounds';
import { GolfScorecard } from '../../model/GolfScorecard';
import { AppRoutes } from '../../model/routes';
import DoneButton from './DoneButton';
import RoundNotFound from './RoundNotFound';
import ScoreGrid from './ScoreGrid';

const ScorecardPage = () => {
  const [golfRound, setGolfRound] = useCurrentRound();
  const golfers = useGolfers();
  const participants = getParticipatingGolfers(golfRound, golfers);
  const goTo = useNavigate();

  if (!golfRound) {
    return <RoundNotFound />;
  }

  const updateScorecard = (scorecard: GolfScorecard) => {
    setGolfRound({ ...golfRound, scorecard });
  };

  const doneClicked = () => {
    goTo(AppRoutes.home);
  };

  return (
    <PageLayout>
      <PageContent className="py-0 px-0">
        <ScoreGrid
          round={golfRound}
          golfers={participants}
          scoresUpdated={updateScorecard}
        />
      </PageContent>
      <ControlPanel>
        <DoneButton
          roundComplete={golfRound.completed}
          onClick={() => doneClicked()}
        />
      </ControlPanel>
    </PageLayout>
  );
};
export default ScorecardPage;
