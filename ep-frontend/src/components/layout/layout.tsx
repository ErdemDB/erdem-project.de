import React, { ReactNode } from 'react';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Topbar';
import Cv from '../../pages/cv/UeberMich';

import './Layout.css';

interface LayoutProps {
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', paddingTop: '64px', height: `calc(100vh - ${'64px'})` }}>
        {/*<Sidebar/>*/}
        <main style={{ flexGrow: 1, overflowY: 'auto' }}>
          <Cv/>
        </main>
      </div>
    </>
  );
};

export default Layout;