import { FC } from 'react';
import { DivComponent } from '../../components/component-utils';
import { GolfCourse } from '../../model/GolfCourse';
import HoleCountPicker from '../round-setup-page/HoleCountPicker';

interface Props extends DivComponent {
  course: GolfCourse;
  onCourseUpdate: (course: GolfCourse) => void;
}
const CourseSetup: FC<Props> = ({ course, onCourseUpdate, className }) => {
  const currentCount = course.holeCount;
  const updateHoleCount = (count: number) => {
    onCourseUpdate({
      ...course,
      holeCount: count,
    });
  };
  return (
    <div className={className}>
      <HoleCountPicker value={currentCount} onUpdate={updateHoleCount} />
    </div>
  );
};

export default CourseSetup;
