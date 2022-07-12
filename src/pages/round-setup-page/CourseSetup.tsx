import React, { FC } from 'react';
import { RadioButton, RadioPicker } from '../../components/RadioPicker';
import { GolfCourse, GolfUtils } from '../../model/golf';
import PageSection from './PageSection';

interface Props {
  course: GolfCourse;
  courseUpdated: (course: GolfCourse) => void;
}
const CourseDetails: FC<Props> = ({ course, courseUpdated }) => {
  const holeCount = course.holes.length;
  const holeOptions: number[] = [9, 18];

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

  const radioButtons = holeOptions.map((count, i) => (
    <RadioButton
      key={i}
      selected={holeCount === count}
      onClick={() => holeCountChanged(count)}
    >
      {count} Holes
    </RadioButton>
  ));

  return (
    <PageSection>
      <header className="mb-8">
        <h1 className="text-3xl mt-4">Course</h1>
      </header>
      <RadioPicker>{radioButtons}</RadioPicker>
    </PageSection>
  );
};
export default CourseDetails;
