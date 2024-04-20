import React from 'react';
import Header from './header/Topbar';
import { Routes, Route } from 'react-router-dom';
import ConstructionIcon from '@mui/icons-material/Construction';

import UeberMich from '../../pages/cv/UeberMich';
import PrivacyPolicy from '../../pages/privacyPolicy/PrivacyPolicy';
import ToDo from '../../pages/toDo/ToDo';


import './Layout.css';
import { Typography } from '@mui/material';

interface LayoutProps { }


const ComingSoon: React.FC = () => {
  return (
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          width: '100%',
      }}>
          <ConstructionIcon style={{fontSize: '148px', color: '#464443'}}/>
          <Typography variant='h5' sx={{pt: '20px'}}>Hier entsteht etwas Großartiges! Schau bald wieder
              vorbei</Typography>
      </div>
  );
};

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <div className="Layout" style={{ display: 'flex', paddingTop: '64px' }}>
        <main style={{ flexGrow: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<UeberMich />} />
            <Route path="/coming-soon" element={<ComingSoon/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/to-do" element={<ToDo/>} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default Layout;
