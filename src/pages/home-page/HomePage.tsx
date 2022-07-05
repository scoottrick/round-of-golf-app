import React from 'react';
import { FaBeer } from 'react-icons/fa';
import {
  PageContent,
  PageLayout,
} from '../../components/page-layout/PageLayout';
import {
  createGolfCourse,
  createGolfers,
  createGolfRound,
} from '../../model/golf';
import './HomePage.scss';

const mockGolfers = createGolfers(['Tom', 'Dick', 'Harry']);
const mockCourse = createGolfCourse('Lunar Lake', 9);
const mockRound = createGolfRound(mockGolfers, mockCourse);

const HomePage = () => {
  return (
    <PageLayout>
      <PageContent>
        <h1 className="uk-text-lead">
          Lets go for a <FaBeer />?
        </h1>
      </PageContent>
      <div className="bottom-sheet uk-box-shadow-xlarge">Bottom Sheet</div>
    </PageLayout>
  );
};
export default HomePage;
