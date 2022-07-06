import React, { FC, ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}
const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col">
      {children}
    </div>
  );
};

interface PageContentProps {
  children: ReactNode;
}
const PageContent: FC<PageContentProps> = ({ children }) => {
  return <div className="py-8 px-4 flex-1">{children}</div>;
};

interface ControlPanelProps {
  hidden?: boolean;
  children: ReactNode;
}
const ControlPanel: FC<ControlPanelProps> = ({ hidden, children }) => {
  return (
    <div
      data-app-hidden={hidden}
      className="py-8 px-4 shadow-inner flex flex-row justify-center items-center"
    >
      {children}
    </div>
  );
};

export { PageLayout, PageContent, ControlPanel };
