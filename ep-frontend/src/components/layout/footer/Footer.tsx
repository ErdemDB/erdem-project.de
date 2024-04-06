import { Box, Typography, Container } from '@mui/material';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FavoriteIcon  from '@mui/icons-material/Favorite';
import textx from '../../../texts.json'

import './Footer.css'; 

const Footer = () => {
  return (
    <Box component="footer" className="footer-container">
      <Typography>
        {textx.footer.copyright}
      </Typography>
      <Typography>
        {textx.footer.madeWith} <FavoriteIcon/> and <CoffeeIcon/>
      </Typography>
    </Box>
  );
};

export default Footer;