import React, { FC } from 'react';
import { ButtonComponent, classNames } from '../model/utils';

function tailwindClass(...parts: (string | number)[]) {
  return parts.join('-');
}

interface ButtonProps extends ButtonComponent {
  outline?: boolean;
  color?: string;
}
export const Button: FC<ButtonProps> = ({
  outline,
  color,
  children,
  className,
  ...props
}) => {
  const baseColor = color || 'green';
  const solid = !outline;
  const transparent = 'transparent';

  const solidButtonColors = [
    tailwindClass('bg', baseColor, 600),
    tailwindClass('hover:bg', baseColor, 400),
    tailwindClass('active:bg', baseColor, 700),
    tailwindClass('text', 'white'),
    tailwindClass('border', transparent),
  ];

  const outlineButtonColors = [
    tailwindClass('text', baseColor, 600),
    tailwindClass('hover:text', baseColor, 500),
    tailwindClass('active:text', baseColor, 700),
    tailwindClass('border', baseColor, 600),
    tailwindClass('hover:border', baseColor, 400),
    tailwindClass('active:border', baseColor, 700),
  ];

  const colorClasses = solid ? solidButtonColors : outlineButtonColors;
  const sizingClasses = ['py-2 px-4', 'text-lg leading-none tracking-wide'];
  const alignment = 'inline-flex flex-row justify-center items-center';
  const shadows = 'shadow-md hover:shadow-lg active:shadow-sm';

  const buttonClasses = [
    ...sizingClasses,
    ...colorClasses,
    alignment,
    shadows,
    'rounded-sm border-2',
    className,
  ].join(' ');
  return (
    <button type="button" className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

interface TextButtonProps extends ButtonComponent {
  color?: string;
}
export const TextButton: FC<TextButtonProps> = ({
  color,
  children,
  ...props
}) => {
  const hoverColor = color || 'green';
  const colors = `hover:text-${hoverColor}-400 active:text-${hoverColor}-700`;
  const staticClasses =
    'inline-flex flex-row justify-center items-center rounded-sm border border-transparent py-1 px-2 leading-none text-black hover:border-gray-200';
  const buttonClasses = [colors, staticClasses].join(' ');
  return (
    <button type="button" className={buttonClasses} {...props}>
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
