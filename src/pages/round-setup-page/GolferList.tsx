import React, { FC, ReactElement, ReactNode } from 'react';
import { GrAdd, GrClose } from 'react-icons/gr';
import { classNames } from '../../model/utils';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
const IconButton: FC<IconButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      type="button"
      className={classNames(['icon-btn rounded', className])}
      {...props}
    >
      {children}
    </button>
  );
};

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
      className="flex flex-row justify-between align-middle mb-2 last:mb-0"
    >
      <input
        className={classNames(['border-b-2 text-md py-1 flex-1'])}
        type="text"
        value={name}
        onChange={e => nameChanged(e.target.value, i)}
      />
      <IconButton
        data-app-hidden={names.length <= 1}
        className="ml-4"
        onClick={() => removeClicked(i)}
      >
        <GrClose />
      </IconButton>
    </li>
  ));
  return (
    <>
      <div className="flex flex-row justify-between mb-8">
        <h1 className="text-2xl flex-1">Golfers</h1>
        <IconButton onClick={() => addClicked()}>
          <GrAdd />
        </IconButton>
      </div>
      <ul className="mb-4 last:mb-0">{nameItems}</ul>
    </>
  );
};
export default GolferList;
