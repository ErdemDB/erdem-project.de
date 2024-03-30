import { createTheme } from '@mui/material/styles';


const Theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 100,
      fontSize: '18px',
      letterSpacing: '0.0075em',
    }, subtitle1: {
      fontWeight: 400,
      fontSize: '13px',
      letterSpacing: '0.0075em',
    }, body2: {
      fontSize: '0.875rem',
      fontFamily: 'IBM Plex Sans, sans-serif',
      letterSpacing: '0.0075em',
      color: '#3d3d3d',
      fontWeight: 700,
    },
  },
});

export default Theme;