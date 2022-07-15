import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { useAddGolfers, useAddGolfRound } from '../../data/GolfRoundsContext';
import { createCourse, GolfCourse } from '../../model/GolfCourse';
import { createGolfer } from '../../model/Golfer';
import { createRound } from '../../model/GolfRound';
import { AppRoutes } from '../../model/routes';
import CourseSetup from '../round-setup-page/CourseSetup';
import GolferSetup from '../round-setup-page/GolferSetup';

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
    <section>
      <div>
        <Button onClick={startNewRound}>Start</Button>
      </div>
      <GolferSetup golferNames={names} onNamesUpdated={setNames} />
      <CourseSetup courseData={course} onCourseUpdated={setCourse} />
    </section>
  );
};

export default NewRound;
