import React from 'react';
import { FaBeer } from 'react-icons/fa';
import {
  PageContent,
  PageLayout,
} from '../../components/page-layout/PageLayout';
import './HomePage.scss';

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
