import React, { useState } from 'react';
import {
  ControlPanel,
  PageContent,
  PageLayout,
  RectButton,
} from '../../components';
import GolferList from './GolferList';

const defaultGolfer = 'Scott';

const RoundSetupPage = () => {
  const [golferNames, setGolferNames] = useState([defaultGolfer, '']);

  return (
    <PageLayout>
      <PageContent>
        <GolferList names={golferNames} namesUpdated={setGolferNames} />
      </PageContent>
      <ControlPanel>
        <RectButton>Let's Play</RectButton>
      </ControlPanel>
    </PageLayout>
  );
};
export default RoundSetupPage;
