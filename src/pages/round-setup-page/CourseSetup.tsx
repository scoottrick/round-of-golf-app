import React, { FC } from 'react';
import { Button } from '../../components';
import { GolfCourse } from '../../model/GolfCourse';
import PageSection from './PageSection';

interface Props {
  courseData: GolfCourse;
  onCourseUpdated: (course: GolfCourse) => void;
}
const CourseDetails: FC<Props> = ({ courseData, onCourseUpdated }) => {
  const currentCount = courseData.holeCount;
  const holeOptions: number[] = [9, 18];

  const holeCountUpdated = (newCount: number) => {
    onCourseUpdated({ ...courseData, holeCount: newCount });
  };

  const radioButtons = holeOptions.map((count, i) => (
    <Button
      className="flex-1 mr-2 last:mr-0"
      key={i}
      outline={currentCount !== count}
      onClick={() => holeCountUpdated(count)}
    >
      {count} Holes
    </Button>
  ));

  return (
    <PageSection>
      <header className="mb-8">
        <h1 className="text-3xl mt-4">Course</h1>
      </header>
      <div className="flex flex-row items-center">{radioButtons}</div>
    </PageSection>
  );
};
export default CourseDetails;
