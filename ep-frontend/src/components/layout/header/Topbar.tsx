import { AppBar, Toolbar, Typography, useTheme } from '@mui/material';
import texts from '../../../texts.json';

import './Topbar.css';

const Topbar = () => {

  const theme = useTheme();
  console.log(theme.typography.h1);

  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar>
        <div style={{ flexGrow: 1 , textAlign: 'left'}}>
          <Typography variant="h1" component="div">
            {texts.topbar.headerTitle}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {texts.topbar.headerSubtitle}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;