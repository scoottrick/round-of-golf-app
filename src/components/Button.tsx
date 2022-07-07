import React, { FC, ReactNode } from 'react';
import { ButtonComponent, classNames } from '../model/utils';

interface RectButtonProps extends ButtonComponent {}
export const RectButton: FC<RectButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames([
        'py-2 px-4 box-border',
        'border border-green-600',
        'shadow-sm shadow-green-100 hover:shadow-md',
        'text-green-600',
        'active:bg-green-600 active:text-white',
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};

interface IconButtonProps extends ButtonComponent {}
export const IconButton: FC<IconButtonProps> = ({
  className,
  children,
  ...props
}) => {
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
