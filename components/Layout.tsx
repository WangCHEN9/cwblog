import { Header, Headercw } from './';
import React, { ReactChildren, ReactChild } from 'react';
interface LayoutProps {
  children: ReactChild | ReactChildren;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Headercw />
    {children}
  </>
);

export default Layout;
