import { FC } from 'react';
import { DivComponent } from './component-utils';

interface Props extends DivComponent {}
export const Page: FC<Props> = ({ children, className, ...props }) => {
  const bgColor = 'bg-gray-200 dark:bg-gray-800';
  return (
    <div
      className={`h-full w-full overflow-auto ${bgColor} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};
