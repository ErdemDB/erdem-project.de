import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Collapse } from '@mui/material';
import texts from '../../../texts.json';
import MenuIcon from '@mui/icons-material/Menu';
import Weather from './weather/Weather';
import { Link, useLocation  } from 'react-router-dom';

import './Topbar.css';

const pages = [
  { name: 'ÜBER MICH', route: '/' },
  { name: 'COMING SOON...', route: '/coming-soon' }
];

const Topbar = () => {
  const [openWeather, setOpenWeather] = useState(false);

  const handleWeatherToggle = () => {
    setOpenWeather(!openWeather);
  };

  const location = useLocation();

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
                key={page.name}
                className='topbarMenu'
                sx={{ my: 2, borderBottom: location.pathname === page.route ? '1px solid #f5f4f0' : 'none'
              }}
                component={Link} to={page.route}
              >
                <Typography variant="body2" component="div">
                  {page.name}
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
