import React, { ReactNode } from 'react';
import Sidebar from './sidebar/Sidebar';

import './layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;  