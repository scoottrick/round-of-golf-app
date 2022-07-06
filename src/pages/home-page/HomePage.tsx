import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContent,
  PageLayout,
} from '../../components/page-layout/PageLayout';
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
      <div className="py-8 px-4 shadow-inner flex flex-row justify-center items-center">
        <button
          onClick={() => playRoundClicked()}
          className="py-2 px-4 box-border border shadow-sm shadow-green-100 border-green-600 text-green-600 hover:shadow-md active:bg-green-600 active:text-white"
        >
          Play a Round
        </button>
      </div>
    </PageLayout>
  );
};
export default HomePage;
