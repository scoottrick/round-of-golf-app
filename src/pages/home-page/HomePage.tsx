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
      <div className="py-8 px-4 flex flex-row justify-center items-center">
        Bottom Sheet
      </div>
    </PageLayout>
  );
};
export default HomePage;
