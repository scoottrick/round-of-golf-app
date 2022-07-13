import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageLayout,
  PageContent,
  ControlPanel,
  RectButton,
} from '../../components';
import { useCurrentRound } from '../../data/GolfRoundsContext';
import { createGolfer } from '../../model/Golfer';
import { createRound, GolfRound } from '../../model/GolfRound';
import { GolfScorecard } from '../../model/GolfScorecard';
import { AppRoutes } from '../../model/routes';
import DoneButton from './DoneButton';
import RoundNotFound from './RoundNotFound';
import ScoreGrid from './ScoreGrid';

const golfers = ['Tom', 'Dick', 'Harry'].map(createGolfer);

function useMockRound() {
  const [round, setRound] = useState(createRound(9, golfers));
  return [round, setRound] as [GolfRound, (...args: any[]) => void];
}

const ScorecardPage = () => {
  // const [golfRound, setGolfRound] = useCurrentRound();
  const [golfRound, setGolfRound] = useMockRound();
  const goTo = useNavigate();

  if (!golfRound) {
    return <RoundNotFound />;
  }

  // const golferScoreUpdated = (
  //   score: number,
  //   golferIndex: number,
  //   holeIndex: number
  // ) => {
  //   const golfers = [...golfers];
  //   const golfer = golfers[golferIndex];
  //   golfer.scores.splice(holeIndex, 1, score);
  //   const completedRound = golfers.every(g =>
  //     GolfUtils.golferCompletedRound(g)
  //   );
  //   setGolfRound({ ...golfRound, golfers: golfers, completed: completedRound });
  // };

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
          golfers={golfers}
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
