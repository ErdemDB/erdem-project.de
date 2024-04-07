import React from 'react';
import './App.css';
import { Typography } from '@mui/material';
import Layout from './components/layout/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/layout/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
        <Footer />
      </div>
    </Router>
  );
}

export default App;