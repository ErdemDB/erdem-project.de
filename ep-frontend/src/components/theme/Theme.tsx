import { createTheme } from '@mui/material/styles';


const Theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 100,
      fontSize: '27px',
    }, h2: {
      fontWeight: 100,
      fontSize: '18px',
    }, h4:{
      color: '#1d1914',
    }, subtitle1: {
      fontWeight: 400,
      fontSize: '13px',
      letterSpacing: '0.0075em',
    }, body1: {
      color: '#1d1914',
      textAlign: 'justify',
    }, body2: {
      fontFamily: 'IBM Plex Sans, Roboto, sans-serif',
      fontSize: '14px',
      color: '#4A4A4A',
      fontWeight: '500',
      lineHeight: '30px',
    },
  },
});

export default Theme;