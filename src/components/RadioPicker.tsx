import React, { FC, useId } from 'react';

export interface RadioOption<T> {
  value: T;
  text: string;
}

interface OptionProps {
  text: string;
  selected: boolean;
  optionSelected: () => void;
}
export const RadioPickerOption: FC<OptionProps> = ({
  text,
  selected,
  optionSelected,
}) => {
  const inputId = `radio-option-${useId()}`;
  return (
    <span className="inline-block text-center flex-1">
      <input
        type="radio"
        id={inputId}
        checked={selected}
        onChange={() => optionSelected()}
      />
      <label htmlFor={inputId}>{text}</label>
    </span>
  );
};

interface Props<T> {
  options: RadioOption<T>[];
  selectedValue: T;
  selectionUpdated: (value: T) => void;
}
export const RadioPicker: FC<Props<any>> = ({
  options,
  selectedValue,
  selectionUpdated,
}) => {
  const radioItems = options.map((option, i) => (
    <RadioPickerOption
      key={i}
      text={option.text}
      selected={selectedValue === option.value}
      optionSelected={() => selectionUpdated(option.value)}
    />
  ));

  return <div className="flex flex-row items-center">{radioItems}</div>;
};
