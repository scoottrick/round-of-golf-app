import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddGolfers, useAddGolfRound } from '../../data/GolfRoundsContext';
import { createCourse } from '../../model/GolfCourse';
import { createGolfer } from '../../model/Golfer';
import { createRound } from '../../model/GolfRound';
import { AppRoutes } from '../../model/routes';
import GolferSetup from '../round-setup-page/GolferSetup';
import CourseSetup from './CourseSetup';
import { Button } from '../../components';
import { HTMLComponent } from '../../components/component-utils';

interface Props extends HTMLComponent {}
const NewRound: FC<Props> = ({ className }) => {
  const [names, setNames] = useState(['']);
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
    <section
      className={`${
        className || ''
      } max-w-6xl flex flex-col justify-between items-center`}
    >
      <div className="grow px-4 pt-12 pb-8 w-full">
        <GolferSetup
          className="mb-12"
          golferNames={names}
          onNamesUpdate={setNames}
        />
        <CourseSetup course={course} onCourseUpdate={setCourse} />
      </div>
      <div className="grow text-center pb-12">
        <Button onClick={startNewRound}>Let's Play</Button>
      </div>
    </section>
  );
};

export default NewRound;
