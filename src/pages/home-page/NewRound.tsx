import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddGolfers, useAddGolfRound } from '../../data/GolfRoundsContext';
import { createCourse } from '../../model/GolfCourse';
import { createGolfer } from '../../model/Golfer';
import { createRound } from '../../model/GolfRound';
import { AppRoutes } from '../../model/routes';
import HoleCountPicker from '../round-setup-page/HoleCountPicker';
import GolferSetup from '../round-setup-page/GolferSetup';
import CourseSetup from './CourseSetup';
import { Button } from '../../components';

const NewRound = () => {
  const [names, setNames] = useState(['Scott', '']);
  const [course, setCourse] = useState(createCourse('Course', 9));

  const addNewRound = useAddGolfRound();
  const addNewGolfers = useAddGolfers();
  const navigate = useNavigate();

  const startNewRound = () => {
    const validNames = names.filter(n => n?.trim().length);
    const golfers = validNames.map(name => createGolfer(name));
    const round = createRound(course.holeCount, golfers);
    addNewGolfers(golfers);
    addNewRound(round);
    navigate(AppRoutes.withPath(AppRoutes.scorecard, round.id));
  };

  return (
    <div className="p-8">
      <GolferSetup golferNames={names} onNamesUpdated={setNames} />
      <CourseSetup course={course} onCourseUpdate={setCourse} />
      <div className="text-center p-8">
        <Button onClick={startNewRound}>Let's Play</Button>
      </div>
    </div>
  );
};

export default NewRound;
