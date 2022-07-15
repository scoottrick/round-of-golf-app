import React, { FC } from 'react';
import { Button } from '../../components';
import { GolfCourse } from '../../model/GolfCourse';
import PageSection from './PageSection';

interface Props {
  value: number;
  onUpdate: (count: number) => void;
}
const HoleCountPicker: FC<Props> = ({ value, onUpdate }) => {
  const holeOptions: number[] = [9, 18];

  const radioButtons = holeOptions.map((count, i) => (
    <Button
      className="flex-1 mr-2 last:mr-0"
      key={i}
      outline={value !== count}
      onClick={() => onUpdate(count)}
    >
      {count} Holes
    </Button>
  ));

  return (
    <section>
      <div className="flex flex-row items-center">{radioButtons}</div>
    </section>
  );
};
export default HoleCountPicker;
