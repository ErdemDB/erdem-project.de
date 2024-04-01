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
    }, subtitle1: {
      fontWeight: 400,
      fontSize: '13px',
      letterSpacing: '0.0075em',
    }, body2: {
      fontSize: '12px',
      fontFamily: 'IBM Plex Sans, sans-serif',
      color: '#3d3d3d',
      fontWeight: 700,
    },
  },
});

export default Theme;