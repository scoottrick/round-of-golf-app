import React, { FC } from 'react';
import { classNames, DivComponent } from '../model/utils';

interface PageLayoutProps extends DivComponent {}
const PageLayout: FC<PageLayoutProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={classNames([
        'fixed top-0 bottom-0 left-0 right-0 flex flex-col',
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  );
};

interface PageContentProps extends DivComponent {}
const PageContent: FC<PageContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(['py-8 px-4 flex-1 overflow-auto', className])}
      {...props}
    >
      {children}
    </div>
  );
};

interface ControlPanelProps extends DivComponent {}
const ControlPanel: FC<ControlPanelProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames([
        'py-8 px-4 shadow-inner flex flex-row justify-center items-center',
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  );
};

export { PageLayout, PageContent, ControlPanel };
