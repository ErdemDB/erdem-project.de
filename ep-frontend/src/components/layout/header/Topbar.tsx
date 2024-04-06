import { AppBar, Toolbar, Typography, Box, Button, IconButton, Collapse } from '@mui/material';
import texts from '../../../texts.json';
import MenuIcon from '@mui/icons-material/Menu';
import Weather from './weather/Weather';
import React, { useState } from 'react';

import './Topbar.css';

const pages = ['ÜBER MICH', 'COMING SOON...'];

const Topbar = () => {
  const [openWeather, setOpenWeather] = useState(false);

  const handleWeatherToggle = () => {
    setOpenWeather(!openWeather);
  };

  return (
    <>
      <AppBar position="fixed" color="primary" elevation={0}>
        <Toolbar>
          <div style={{ flexGrow: 1, textAlign: 'left' }}>
            <Typography variant="h2" component="div" color="inherit">
              {texts.topbar.headerTitle}
            </Typography>
            <Typography variant="subtitle1" component="div" color="inherit">
              {texts.topbar.headerSubtitle}
            </Typography>
          </div>
          <Box sx={{ display: { xs: 'flex', md: 'flex' }, alignItems: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                className='topbarMenu'
                sx={{ my: 2, color: 'white' }}>
                <Typography variant="body2" component="div">
                  {page}
                </Typography>
              </Button>
            ))}
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={handleWeatherToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Collapse className='Toolbar-Collapse' in={openWeather}>
        <Weather />
      </Collapse>
    </>
  );
};

export default Topbar;
