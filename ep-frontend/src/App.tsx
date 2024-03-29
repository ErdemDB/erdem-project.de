import React from 'react';
import './App.css';
import {Typography } from '@mui/material';
import Layout from './components/layout/layout';

function App() {
  return (
      <div className="App">
        <Layout>
          <Typography variant="body1">
            Hier ist dein Text mit der globalen Schriftart Roboto.
          </Typography>
        </Layout>
      </div>
  );
}
 
export default App;