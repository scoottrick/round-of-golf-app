import React, { FC } from 'react';
import GolferNameInput from './GolferNameInput';

interface Props {
  names: string[];
  namesUpdated: (names: string[]) => void;
}
const GolferList: FC<Props> = ({ names, namesUpdated }) => {
  const nameChanged = (value: string, index: number) => {
    names.splice(index, 1, value);
    namesUpdated([...names]);
  };
  const removeName = (index: number) => {
    names.splice(index, 1);
    namesUpdated([...names]);
  };
  const nameItems = names.map((name, i) => (
    <li key={i} className="mb-4 last:mb-0">
      <GolferNameInput
        value={name}
        onUpdate={n => nameChanged(n, i)}
        removeable={names.length > 1}
        onRemove={() => removeName(i)}
      />
    </li>
  ));
  return <ul>{nameItems}</ul>;
};
export default GolferList;
