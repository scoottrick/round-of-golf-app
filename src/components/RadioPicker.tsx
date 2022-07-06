import React, { FC, useId } from 'react';

export interface RadioPickerOption<T> {
  value: T;
  text: string;
}

interface Props<T> {
  options: RadioPickerOption<T>[];
  selectedValue: T;
  optionSelected: (value: T) => void;
}
export const RadioPicker: FC<Props<any>> = ({
  options,
  selectedValue,
  optionSelected: selectionUpdated,
}) => {
  const id = useId();

  const selectOption = (value: any) => {
    selectionUpdated(value);
  };

  const radioItems = options.map((option, i) => {
    const inputId = `${id}radio-option${i}`;
    const checked = option.value === selectedValue;
    return (
      <span key={i} className="inline-block text-center flex-1">
        <input
          type="radio"
          id={inputId}
          checked={checked}
          onChange={() => selectOption(option.value)}
        />
        <label htmlFor={inputId}>{option.text}</label>
      </span>
    );
  });

  return <div className="flex flex-row items-center">{radioItems}</div>;
};
