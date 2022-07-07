import React, { FC, useState } from 'react';
import {
  ControlPanel,
  PageContent,
  PageLayout,
  RectButton,
} from '../../components';
import { GolfRound, GolfUtils } from '../../model/golf';
import CourseDetails from './CourseDetails';
import GolferList from './GolferList';

const defaultGolfer = 'Scott';
const defaultCourse = GolfUtils.newPar3Course('', 9);

interface Props {
  setupCompleted: (round: GolfRound) => void;
}
const RoundSetupPage: FC<Props> = ({ setupCompleted }) => {
  const [golferNames, setGolferNames] = useState([defaultGolfer, '']);
  const [courseData, setCourseData] = useState(defaultCourse);

  const buildRound = () => {
    const validNames = golferNames.filter(n => n?.trim().length);
    const golfers = GolfUtils.createGolfers(validNames);
    return GolfUtils.newRound(golfers, courseData);
  };

  const startRoundClicked = () => {
    const newRound = buildRound();
    setupCompleted(newRound);
  };

  return (
    <PageLayout>
      <PageContent>
        <GolferList names={golferNames} namesUpdated={setGolferNames} />
        <CourseDetails course={courseData} courseUpdated={setCourseData} />
      </PageContent>
      <ControlPanel>
        <RectButton onClick={() => startRoundClicked()}>Let's Play</RectButton>
      </ControlPanel>
    </PageLayout>
  );
};
export default RoundSetupPage;
