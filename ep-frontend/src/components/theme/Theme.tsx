import { createTheme } from '@mui/material/styles';


const Theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 300,
      fontSize: '27px',
      color: '#f5f4f0',
    }, h2: {
      fontWeight: 300,
      fontSize: '18px',
      color: '#f5f4f0',
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
      fontFamily: 'Graphik, sans-serif',
      fontSize: '.875em',
      color: '#f5f4f0',
      fontWeight: 400,
      lineHeight: '1.5rem',
      maxWidth: '40em',
    },
  },
});

export default Theme;