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
import RoundOverview from './RoundOverview';

const mockGolfers = createGolfers(['Tom', 'Dick', 'Harry']);
const mockCourse = createGolfCourse('Lunar Lake', 9);
const mockRound = createGolfRound(mockGolfers, mockCourse);

const HomePage = () => {
  return (
    <PageLayout>
      <PageContent>
        <div className="content-spacing">
          <div className="uk-card">
            <h1 className="uk-text-lead">
              Lets go for a <FaBeer />?
            </h1>
          </div>
          <ul>
            <li>
              <RoundOverview round={mockRound} />
            </li>
          </ul>
        </div>
      </PageContent>
      <div className="bottom-sheet uk-box-shadow-xlarge">Bottom Sheet</div>
    </PageLayout>
  );
};
export default HomePage;
