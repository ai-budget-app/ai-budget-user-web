import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#222222',
      secondary: '#888888',
    },
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
    primary: {
      main: '#90caf9',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
});