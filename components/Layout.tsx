import { Header } from './'
import React, { ReactChildren, ReactChild } from 'react';
interface LayoutProps {
  children: ReactChild | ReactChildren;
}

const Layout = ( { children } : LayoutProps ) => {
    return (
        <div>
            <Header/>
           { children } 
        </div>
    )
}

export default Layout
