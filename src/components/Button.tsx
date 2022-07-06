import React, { FC, ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
export const RectButton: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="py-2 px-4 box-border border shadow-sm shadow-green-100 border-green-600 text-green-600 hover:shadow-md active:bg-green-600 active:text-white"
      {...props}
    >
      {children}
    </button>
  );
};
