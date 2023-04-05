import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEagerConnect } from 'hooks/useEagerConnect';
import LoadingPage from 'pages/Loading';
import React, { Suspense } from 'react';
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
      }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingPage />}>
        <Routers />
      </Suspense>
    </ThemeProvider>
  );
};
