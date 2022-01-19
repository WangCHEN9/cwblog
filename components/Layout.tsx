import { Header } from './';
import React, { ReactChildren, ReactChild } from 'react';
interface LayoutProps {
  children: ReactChild | ReactChildren;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    {/* <Header /> */}
    {children}
  </>
);

export default Layout;
