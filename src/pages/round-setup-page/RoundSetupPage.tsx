import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControlPanel, PageContent, PageLayout } from '../../components';
import { useAddGolfRound } from '../../data/GolfRoundsContext';
import { createCourse } from '../../model/GolfCourse';
import { createGolfer } from '../../model/Golfer';
import { createRound } from '../../model/GolfRound';
import { AppRoutes } from '../../model/routes';
import CourseSetup from './CourseSetup';
import GolferSetup from './GolferSetup';
import StartRoundButton from './StartRoundButton';

const defaultGolfer = 'Scott';
const defaultCourse = createCourse('9 Hole Course', 9);

interface Props {}
const RoundSetupPage: FC<Props> = () => {
  const [golferNames, setGolferNames] = useState([defaultGolfer, '']);
  const [courseData, setCourseData] = useState(defaultCourse);

  const addNewRound = useAddGolfRound();
  const goTo = useNavigate();

  const startRoundClicked = () => {
    const validNames = golferNames.filter(n => n?.trim().length);
    const golfers = validNames.map(name => createGolfer(name));
    const round = createRound(courseData.holeCount, golfers);
    addNewRound(round);
    goTo(AppRoutes.withPath(AppRoutes.scorecard, round.id));
  };

  return (
    <PageLayout>
      <PageContent>
        <GolferSetup golferNames={golferNames} namesUpdated={setGolferNames} />
        <CourseSetup courseData={courseData} courseUpdated={setCourseData} />
      </PageContent>
      <ControlPanel>
        <StartRoundButton onClick={startRoundClicked} />
      </ControlPanel>
    </PageLayout>
  );
};
export default RoundSetupPage;
