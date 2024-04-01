import { AppBar, Toolbar, Typography } from '@mui/material';
import texts from '../../../texts.json';
import Weather from './weather/Weather';

import './Topbar.css';

const Topbar = () => {
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar>
        <div style={{ flexGrow: 1 , textAlign: 'left'}}>
          <Typography variant="h2" component="div">
            {texts.topbar.headerTitle}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {texts.topbar.headerSubtitle}
          </Typography>
        </div>
        <div>
          <Weather/>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;