import { FC } from 'react';
import { ButtonComponent, tailwindClass } from './component-utils';

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
  const buttonClasses = [
    ...colorClasses,
    'inline-flex flex-row justify-center items-center',
    'shadow-md hover:shadow-lg active:shadow-sm',
    'py-2 px-4 rounded-sm border-2',
    'text-lg leading-none tracking-wide',
    className,
  ].join(' ');
  return (
    <button type="button" className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
