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
    <li key={i} className="mb-2 last:mb-0 w-1/2 min-w-72 p-2 mx-auto">
      <GolferNameInput
        value={name}
        removeable={names.length > 1}
        onUpdate={n => nameChanged(n, i)}
        onRemove={() => removeName(i)}
      />
    </li>
  ));
  return <ul>{nameItems}</ul>;
};
export default GolferList;
