import React from 'react';
import {
  PageContent,
  PageLayout,
} from '../../components/page-layout/PageLayout';
import { GolfUtils } from '../../model/golf';
import RoundOverview from './RoundOverview';

const mockGolfers = GolfUtils.createGolfers(['Tom', 'Dick', 'Harry']);
const mockCourse = GolfUtils.newPar3Course('Lunar Lake', 9);
const mockRound = GolfUtils.newRound(mockGolfers, mockCourse);

const HomePage = () => {
  return (
    <PageLayout>
      <PageContent>
        <ul>
          <li>
            <RoundOverview round={mockRound} />
          </li>
        </ul>
      </PageContent>
      <div className="py-6 px-2 flex flex-row justify-center items-center">
        Bottom Sheet
      </div>
    </PageLayout>
  );
};
export default HomePage;
