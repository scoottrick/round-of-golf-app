import React, { FC } from 'react';
import { IconButton } from '../../components';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';

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
  const addClicked = () => {
    namesUpdated([...names, '']);
  };
  const nameItems = names.map((name, i) => (
    <li
      key={i}
      className="flex flex-row justify-between align-middle mb-4 last:mb-0"
    >
      <input
        className="border-b-2 text-md py-1 flex-1"
        type="text"
        value={name}
        onChange={e => nameChanged(e.target.value, i)}
      />
      <IconButton
        data-app-hidden={names.length <= 1}
        className="ml-8"
        onClick={() => removeClicked(i)}
      >
        <MinusIcon className="w-4 h-4" />
      </IconButton>
    </li>
  ));
  return (
    <section className="mb-8 last:mb-0">
      <header className="flex flex-row justify-between items-start mb-8">
        <h1 className="text-3xl mt-4 flex-1">Golfers</h1>
        <IconButton onClick={() => addClicked()}>
          <PlusIcon className="w-4 h-4 text-orange-600" />
        </IconButton>
      </header>
      <ul>{nameItems}</ul>
    </section>
  );
};
export default GolferList;
