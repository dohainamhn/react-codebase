import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEagerConnect } from 'hooks/useEagerConnect';
import React from 'react';
import Routers from 'routes/Router';
import { themeConfig } from 'theme';
import './styles/index.css';

export const App = () => {
  useEagerConnect();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          ...themeConfig.palette,
        },
        breakpoints: {
          values: {
            xs: 0,
            xxs: 375,
            xss: 450,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  );
};
