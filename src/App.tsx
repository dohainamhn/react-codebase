import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrivateLayout from 'components/PrivateLayout';
import PublicLayout from 'components/PublicLayout';
import { useEagerConnect } from 'hooks/useEagerConnect';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import React from 'react';
import { useRoutes } from 'react-router-dom';
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

  const elements = useRoutes([
    {
      path: '/login',

      element: (
        <PublicLayout>
          <Login />
        </PublicLayout>
      ),

      // children: [
      //   { index: true, element: <BestSeller /> },
      //   { path: 'laptop', element: <Laptop /> },
      //   { path: 'desktop', element: <Desktop /> }
      // ]
    },
    {
      path: '/',
      element: (
        <PrivateLayout>
          <Home />
        </PrivateLayout>
      ),
    },

    { path: '*', element: <NotFound /> },
  ]);

  return <ThemeProvider theme={theme}>{elements}</ThemeProvider>;
};
