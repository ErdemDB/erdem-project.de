import { Box, Button, Typography } from '@mui/material';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FavoriteIcon from '@mui/icons-material/Favorite';
import textx from '../../../texts.json'
import { Link } from 'react-router-dom';


import { ReactComponent as Spring } from '../../../techLogos/Spring.svg';
import { ReactComponent as Java } from '../../../techLogos/Java.svg';
import { ReactComponent as Typescript } from '../../../techLogos/Typescript.svg';
import { ReactComponent as React } from '../../../techLogos/React.svg';
import { ReactComponent as Docker } from '../../../techLogos/Docker.svg';
import { ReactComponent as Digitalocean } from '../../../techLogos/Digitalocean.svg';

import './Footer.css';

const Footer = () => {

  const pageRoute = "/privacy-policy" as string;

  return (
    <Box component="footer" className="footer-container">
      <Typography>
        <Button component={Link} to={pageRoute}>{textx.footer.datenschutzerklaerung}</Button><br />
        Powered by
        <Java style={{
          width: '60px',
          height: '50px',
          filter: 'grayscale(20%)'
        }} />
        <Spring style={{
          width: '110px',
          height: '50px',
          filter: 'grayscale(30%)',
          marginRight: '3px'
        }} />
        <Typescript style={{
          width: '40px',
          height: '40px',
          filter: 'grayscale(30%)',
          transform: 'scale(0.9)'
        }} />
        <React style={{
          width: '110px',
          height: '60px',
          filter: 'grayscale(70%)',
          transform: 'scale(0.7)'
        }} />
        <Docker style={{
          width: '120px',
          height: '40px',
          filter: 'grayscale(30%)',
          transform: 'scale(0.7)',
          marginLeft: '-5px',
        }} />
        <Digitalocean style={{
          width: '60px',
          height: '40px',
          filter: 'grayscale(10%)',
          transform: 'scale(0.9)'
        }} />
      </Typography>
      <Typography>
        {textx.footer.madeWith} <FavoriteIcon /> and <CoffeeIcon /> <span style={{ fontSize: '22px', margin: '3px' }}>|</span> {textx.footer.copyright}
      </Typography>
    </Box>
  );
};

export default Footer;