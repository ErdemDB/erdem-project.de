import React from 'react';
import Header from './header/Topbar';
import Cv from '../../pages/cv/UeberMich';
import Footer from './footer/Footer'

import './Layout.css';

interface LayoutProps {
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', paddingTop: '64px', height: `calc(100vh - ${'64px'})` }}>
        <main style={{ flexGrow: 1, overflowY: 'auto' }}>
          <Cv/>
          <Footer/>
        </main>
      </div>
    </>
  );
};

export default Layout;