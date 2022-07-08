import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ControlPanel,
  PageContent,
  PageLayout,
  RectButton,
} from '../../components';
import { useAddGolfRound } from '../../data/GolfRoundsContext';
import { GolfUtils } from '../../model/golf';
import { AppRoutes } from '../../model/routes';
import CourseDetails from './CourseDetails';
import GolferList from './GolferList';

const defaultGolfer = 'Scott';
const defaultCourse = GolfUtils.newPar3Course('', 9);

interface Props {}
const RoundSetupPage: FC<Props> = ({}) => {
  const [golferNames, setGolferNames] = useState([defaultGolfer, '']);
  const [courseData, setCourseData] = useState(defaultCourse);

  const addNewRound = useAddGolfRound();
  const goTo = useNavigate();

  const startRoundClicked = () => {
    const validNames = golferNames.filter(n => n?.trim().length);
    const golfers = GolfUtils.createGolfers(validNames);
    const newRound = GolfUtils.newRound(golfers, courseData);
    addNewRound(newRound);
    goTo(AppRoutes.withPath(AppRoutes.scorecard, newRound.id));
  };

  return (
    <PageLayout>
      <PageContent>
        <GolferList names={golferNames} namesUpdated={setGolferNames} />
        <CourseDetails course={courseData} courseUpdated={setCourseData} />
      </PageContent>
      <ControlPanel>
        <RectButton onClick={startRoundClicked}>Let's Play</RectButton>
      </ControlPanel>
    </PageLayout>
  );
};
export default RoundSetupPage;
