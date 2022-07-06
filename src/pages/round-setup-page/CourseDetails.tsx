import React, { FC, useId } from 'react';
import { GolfCourse, GolfUtils } from '../../model/golf';

interface Props {
  course: GolfCourse;
  courseUpdated: (course: GolfCourse) => void;
}
const CourseDetails: FC<Props> = ({ course, courseUpdated }) => {
  const holeCount = course.holes.length;
  const id9Holes = `9-holes-${useId()}`;
  const id18Holes = `18-holes-${useId()}`;

  const dispatchCourseUpdate = (courseData: Partial<GolfCourse>) => {
    courseUpdated({ ...course, ...courseData });
  };

  const holeCountChanged = (newCount: number) => {
    const holesAdded = newCount - holeCount;
    if (holesAdded > 0) {
      const newHoles = GolfUtils.holesWithPar(holesAdded, 3);
      dispatchCourseUpdate({ holes: [...course.holes, ...newHoles] });
      return;
    }
    if (holesAdded < 0) {
      const newHoles = course.holes.slice(0, holesAdded);
      dispatchCourseUpdate({ holes: newHoles });
      return;
    }
  };

  return (
    <>
      <h1 className="text-2xl mb-4">Course</h1>
      <div className="flex flex-row items-center">
        <span className="inline-block text-center flex-1">
          <input
            type="radio"
            id={id9Holes}
            checked={holeCount === 9}
            onChange={() => holeCountChanged(9)}
          />
          <label htmlFor={id9Holes}>9 Holes</label>
        </span>
        <span className="inline-block text-center flex-1">
          <input
            type="radio"
            id={id18Holes}
            checked={holeCount === 18}
            onChange={() => holeCountChanged(18)}
          />
          <label htmlFor={id18Holes}>18 Holes</label>
        </span>
      </div>
    </>
  );
};
export default CourseDetails;
