import React, { FC, ReactNode } from 'react';
import './PageLayout.scss';

interface PageLayoutProps {
  children: ReactNode;
}
const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return <div className="page-layout">{children}</div>;
};

interface PageContentProps {
  children: ReactNode;
}
const PageContent: FC<PageContentProps> = ({ children }) => {
  return <div className="page-content">{children}</div>;
};

export { PageLayout, PageContent };
