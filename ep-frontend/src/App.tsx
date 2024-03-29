import React from 'react';
import './App.css';
import { CssBaseline, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './components/layout/layout';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Layout>
          <Typography variant="body1">
            Hier ist dein Text mit der globalen Schriftart Roboto.
          </Typography>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;