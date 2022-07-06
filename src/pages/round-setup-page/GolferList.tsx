import React, { FC } from 'react';

interface Props {
  names: string[];
  namesUpdated: (names: string[]) => void;
}
const GolferList: FC<Props> = ({ names, namesUpdated }) => {
  const nameChanged = (value: string, index: number) => {
    names.splice(index, 1, value);
    namesUpdated([...names]);
  };
  const nameItems = names.map((name, i) => (
    <li key={i}>
      <input
        type="text"
        value={name}
        onChange={e => nameChanged(e.target.value, i)}
      />
    </li>
  ));
  return (
    <div>
      <h1 className="text-lg">Golfers</h1>
      <ul>{nameItems}</ul>
    </div>
  );
};
export default GolferList;
