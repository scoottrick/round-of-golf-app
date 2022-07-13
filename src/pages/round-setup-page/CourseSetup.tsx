import React, { FC } from 'react';
import { RadioButton, RadioPicker } from '../../components/RadioPicker';
import { GolfUtils } from '../../model/golf';
import { GolfCourse } from '../../model/GolfCourse';
import PageSection from './PageSection';

interface Props {
  courseData: GolfCourse;
  courseUpdated: (course: GolfCourse) => void;
}
const CourseDetails: FC<Props> = ({ courseData, courseUpdated }) => {
  const currentCount = courseData.holeCount;
  const holeOptions: number[] = [9, 18];

  const holeCountUpdated = (newCount: number) => {
    courseUpdated({ ...courseData, holeCount: newCount });
  };

  const radioButtons = holeOptions.map((count, i) => (
    <RadioButton
      key={i}
      selected={currentCount === count}
      onClick={() => holeCountUpdated(count)}
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
