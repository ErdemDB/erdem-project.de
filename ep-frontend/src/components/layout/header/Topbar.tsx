import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Collapse } from '@mui/material';
import texts from '../../../texts.json';
import MenuIcon from '@mui/icons-material/Menu';
import Weather from './weather/Weather';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Topbar.css';

const pages = [
  { name: 'ÜBER MICH', route: '/' },
  { name: 'COMING SOON...', route: '/coming-soon' }
];

const Topbar = () => {
  const [openWeather, setOpenWeather] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleWeatherToggle = () => {
    setOpenWeather(!openWeather);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (openWeather) {
        const menuButton = document.getElementById('menuButton');
        if (menuButton && !menuButton.contains(event.target as Node)) {
          setOpenWeather(false);
        }
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [openWeather]);

  const redirectToHome = () => {
    navigate('/');
  };


  return (
    <>
      <AppBar position="fixed" color="primary" elevation={0}>
        <Toolbar>
          <Box onClick={redirectToHome} style={{ flexGrow: 1, textAlign: 'left', cursor: 'pointer' }}>
            <Typography variant="h2" component="div" color="inherit">
              {texts.topbar.headerTitle}
            </Typography>
            <Typography variant="subtitle1" component="div" color="inherit">
              {texts.topbar.headerSubtitle}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'flex' }, alignItems: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                className='topbarMenu'
                sx={{
                  my: 2, borderBottom: location.pathname === page.route ? '1px solid #f5f4f0' : 'none'
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
              id="menuButton"
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
