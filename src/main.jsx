import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider, useTheme } from '@/shared/context/ThemeContext';
import { lightTheme, darkTheme } from '@/shared/theme/theme';
import App from './App.jsx';

const Root = () => {
  const { isDark } = useTheme();
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <Root />
    </ThemeContextProvider>
  </StrictMode>
);