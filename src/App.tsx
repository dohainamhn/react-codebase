import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from 'components/PrivateLayout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { themeConfig } from 'theme';
import './style.css';

export const App = () => {
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

      element: <Login />,

      // children: [
      //   { index: true, element: <BestSeller /> },
      //   { path: 'laptop', element: <Laptop /> },
      //   { path: 'desktop', element: <Desktop /> }
      // ]
    },
    { path: '/', element: <Home /> },

    { path: '*', element: <NotFound /> },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <Layout>{elements}</Layout>
    </ThemeProvider>
  );
};
