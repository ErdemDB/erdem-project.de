import React, { ReactNode } from 'react';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Topbar';
import Cv from './cv/Cv';

import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', paddingTop: '64px', height: `calc(100vh - ${'64px'})` }}>
        <Sidebar/>
        <main style={{ flexGrow: 1, overflowY: 'auto' }}>
          {children}
          <Cv/>
        </main>
      </div>
    </>
  );
};

export default Layout;