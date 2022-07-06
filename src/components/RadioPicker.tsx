import React, { FC, ReactElement, ReactNode } from 'react';
import { classNames } from '../model/utils';

interface RadioButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  children: ReactNode;
}
export const RadioButton: FC<RadioButtonProps> = ({
  selected,
  children,
  ...props
}) => {
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

interface RadioPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactElement<RadioButtonProps> | ReactElement<RadioButtonProps>[];
}
export const RadioPicker: FC<RadioPickerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={classNames(['flex flex-row items-center', className])}
      {...props}
    >
      {children}
    </div>
  );
};
