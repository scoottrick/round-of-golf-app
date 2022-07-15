import { ArrowLeftIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageLayout,
  PageContent,
  ControlPanel,
  TextButton,
} from '../../components';
import { Page } from '../../components/Page';
import {
  useCurrentRound,
  useDeleteGolfRound,
  useGolfers,
} from '../../data/GolfRoundsContext';
import { getParticipatingGolfers } from '../../data/rounds';
import { GolfScorecard } from '../../model/GolfScorecard';
import { AppRoutes } from '../../model/routes';
import DoneButton from './DoneButton';
import RoundNotFound from './RoundNotFound';
import ScoreGrid from './ScoreGrid';

const ScorecardPage = () => {
  const [golfRound, setGolfRound] = useCurrentRound();
  const removeGolfRound = useDeleteGolfRound();
  const golfers = useGolfers();
  const participants = getParticipatingGolfers(golfRound, golfers);
  const navigate = useNavigate();

  if (!golfRound) {
    return <RoundNotFound />;
  }

  const updateScorecard = (scorecard: GolfScorecard) => {
    setGolfRound({ ...golfRound, scorecard });
  };

  const goToHomePage = () => {
    navigate(AppRoutes.home);
  };

  const removeRound = () => {
    removeGolfRound(golfRound);
    goToHomePage();
  };

  return (
    <Page>
      <div className="bg-gray-400 p-2 flex flex-row justify-between">
        <TextButton onClick={goToHomePage}>
          <ArrowLeftIcon className="h-5 inline" />
        </TextButton>
        <span>
          <TextButton className="ml-2" data-app-hidden>
            <PencilIcon className="h-5 inline" />
          </TextButton>
          <TextButton className="ml-2" onClick={removeRound}>
            <TrashIcon className="h-5 inline" />
          </TextButton>
        </span>
      </div>
      <ScoreGrid
        round={golfRound}
        golfers={participants}
        scoresUpdated={updateScorecard}
      />
    </Page>
  );
};
export default ScorecardPage;
