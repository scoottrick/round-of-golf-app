import React, { FC, useState } from 'react';
import { RadioPicker, RadioPickerOption } from '../../components/RadioPicker';
import { GolfCourse, GolfUtils } from '../../model/golf';

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

  return (
    <>
      <h1 className="text-2xl mb-4">Course</h1>
      <RadioPicker
        options={holeOptions.map(count => `${count} Holes`)}
        optionSelected={index => holeCountChanged(holeOptions[index])}
      />
    </>
  );
};
export default CourseDetails;
