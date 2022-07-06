import { truncate } from 'fs';
import React, { FC, ReactNode, useEffect, useState } from 'react';

function classNames(nameArgs: (string | [boolean, string, string?])[]): string {
  const allNames: string[] = [];
  for (let nameArg of nameArgs) {
    if (typeof nameArg === 'string') {
      allNames.push(nameArg);
      continue;
    }
    if (Array.isArray(nameArg)) {
      const [condition, trueClass, falseClass] = nameArg;
      const result = condition ? trueClass : falseClass;
      result && allNames.push(result);
      continue;
    }
  }
  return allNames.join(' ');
}
export interface RadioPickerOption<T> {
  value: T;
  text: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  children: ReactNode;
}
const RadioButton: FC<ButtonProps> = ({ selected, children, ...props }) => {
  const activeBg = 'bg-green-600';
  const activeText = 'text-white';
  const className = classNames([
    'py-2 px-4 flex-1 border-box',
    'shadow-sm shadow-green-100 hover:shadow-lg',
    'border border-green-600',
    `active:${activeBg} active${activeText}`,
    [selected, activeText, 'text-green-600'],
    [selected, activeBg],
  ]);
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
};

interface Props {
  options: string[];
  optionSelected: (index: number) => void;
}
export const RadioPicker: FC<Props> = ({ options, optionSelected }) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    optionSelected(selected);
  }, [selected]);

  const optionClicked = (index: any) => {
    setSelected(index);
    // optionSelected(index);
  };

  const radioItems = options.map((option, i) => {
    return (
      <RadioButton
        key={i}
        selected={i === selected}
        onClick={() => optionClicked(i)}
      >
        {option}
      </RadioButton>
    );
  });

  return <div className="flex flex-row items-center">{radioItems}</div>;
};
