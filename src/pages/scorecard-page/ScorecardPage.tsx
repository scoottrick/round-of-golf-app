import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageLayout,
  PageContent,
  ControlPanel,
  RectButton,
} from '../../components';
import { useCurrentRound } from '../../data/GolfRoundsContext';
import { GolfUtils } from '../../model/golf';
import { AppRoutes } from '../../model/routes';
import DoneButton from './DoneButton';
import RoundNotFound from './RoundNotFound';
import ScoreGrid from './ScoreGrid';

const ScorecardPage = () => {
  const [golfRound, setGolfRound] = useCurrentRound();
  const goTo = useNavigate();

  if (!golfRound) {
    return <RoundNotFound />;
  }

  const golferScoreUpdated = (
    score: number,
    golferIndex: number,
    holeIndex: number
  ) => {
    const golfers = [...golfRound.golfers];
    const golfer = golfers[golferIndex];
    golfer.scores.splice(holeIndex, 1, score);
    const completedRound = golfers.every(g =>
      GolfUtils.golferCompletedRound(g)
    );
    setGolfRound({ ...golfRound, golfers: golfers, completed: completedRound });
  };

  const doneClicked = () => {
    goTo(AppRoutes.home);
  };

  const { course, golfers } = golfRound;
  return (
    <PageLayout>
      <PageContent className="py-0 px-0">
        <ScoreGrid
          holeCount={course.holes.length}
          golfers={golfers}
          scoreUpdated={golferScoreUpdated}
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
