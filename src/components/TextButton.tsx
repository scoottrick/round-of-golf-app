import { FC } from 'react';
import { ButtonComponent, tailwindClass } from './component-utils';

interface Props extends ButtonComponent {
  color?: string;
}
export const TextButton: FC<Props> = ({
  color,
  children,
  className,
  ...props
}) => {
  const hoverColor = color || 'green';
  const buttonClasses = [
    tailwindClass('hover:text', hoverColor, 400),
    tailwindClass('active:text', hoverColor, 700),
    'inline-flex flex-row justify-center items-center',
    'border border-transparent hover:border-gray-200',
    'py-1 px-2 rounded-sm leading-none',
    className,
  ].join(' ');
  return (
    <button type="button" className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
