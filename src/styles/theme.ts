import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
  },
};

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#5E1B92',
    },
    secondary: {
      main: '#895BAC',
    },
    background: {
      default: '#FEFEFE',
    },
    text: {
      primary: '#210C3A',
      secondary: '#B59DC8',
    },
  },
  ...commonSettings,
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#5E1B92',
    },
    secondary: {
      main: '#895BAC',
    },
    background: {
      default: '#101010',
    },
    text: {
      primary: '#FEFEFE',
      secondary: '#B59DC8',
    },
  },
  ...commonSettings,
});

export { lightTheme, darkTheme };
