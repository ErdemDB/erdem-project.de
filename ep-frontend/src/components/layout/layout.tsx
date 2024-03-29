import React from 'react';
import Sidebar from './sidebar/Sidebar';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;