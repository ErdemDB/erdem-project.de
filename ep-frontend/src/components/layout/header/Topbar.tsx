import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import texts from '../../../texts.json';
import Weather from './weather/Weather';

import './Topbar.css';

const pages = ['ÜBER MICH', 'COMING SOON...'];

const Topbar = () => {
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar>
        <div style={{ flexGrow: 1, textAlign: 'left' }}>
          <Typography variant="h2" component="div">
            {texts.topbar.headerTitle}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {texts.topbar.headerSubtitle}
          </Typography>
        </div>
        <div>
          <Box sx={{ flexGrow: 1, display: { xs: '2', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                className='topbarMenu'
                sx={{ my: 2}}>
                <Typography variant="body2" component="div">
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
          {/*<Weather/>*/}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;