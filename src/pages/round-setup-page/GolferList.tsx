import React, { FC } from 'react';
import RemoveGolferButton from './RemoveGolferButton';
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
  const removeClicked = (index: number) => {
    names.splice(index, 1);
    namesUpdated([...names]);
  };
  const nameItems = names.map((name, i) => (
    <li
      key={i}
      className="flex flex-row justify-between align-middle mb-4 last:mb-0"
    >
      <GolferNameInput value={name} updated={n => nameChanged(n, i)} />
      <RemoveGolferButton
        hidden={names.length <= 1}
        onClick={() => removeClicked(i)}
      />
    </li>
  ));
  return <ul>{nameItems}</ul>;
};
export default GolferList;
