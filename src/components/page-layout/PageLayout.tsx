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

export { PageLayout, PageContent };
