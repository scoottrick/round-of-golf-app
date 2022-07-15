import { FC } from 'react';
import { GolfCourse } from '../../model/GolfCourse';
import HoleCountPicker from '../round-setup-page/HoleCountPicker';

interface Props {
  course: GolfCourse;
  onCourseUpdate: (course: GolfCourse) => void;
}
const CourseSetup: FC<Props> = ({ course, onCourseUpdate }) => {
  const currentCount = course.holeCount;
  const updateHoleCount = (count: number) => {
    onCourseUpdate({
      ...course,
      holeCount: count,
    });
  };
  return <HoleCountPicker value={currentCount} onUpdate={updateHoleCount} />;
};

export default CourseSetup;
