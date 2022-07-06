import React from 'react';
import {
  PageContent,
  PageLayout,
} from '../../components/page-layout/PageLayout';
import { GolfUtils } from '../../model/golf';
import RoundList from './RoundList';

const mockGolfers = GolfUtils.createGolfers(['Tom', 'Dick', 'Harry']);
const mockCourse = GolfUtils.newPar3Course('Lunar Lake', 9);
const mockRound = GolfUtils.newRound(mockGolfers, mockCourse);

const HomePage = () => {
  const rounds = [mockRound];
  return (
    <PageLayout>
      <PageContent>
        <RoundList rounds={rounds} />
      </PageContent>
      <div className="py-8 px-4 shadow-inner flex flex-row justify-center items-center">
        <button className="py-2 px-4 box-border border shadow-sm shadow-green-100 border-green-600 text-green-600 hover:shadow-md active:bg-green-600 active:text-white">
          Play a Round
        </button>
      </div>
    </PageLayout>
  );
};
export default HomePage;
