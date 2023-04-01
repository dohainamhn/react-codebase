import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import { useRoutes } from 'react-router-dom';

export default function Router() {
  const elements = useRoutes([
    {
      path: 'login',
        
      element: <Login />,
      
      // children: [
      //   { index: true, element: <BestSeller /> },
      //   { path: 'laptop', element: <Laptop /> },
      //   { path: 'desktop', element: <Desktop /> }
      // ]
    },
    { path: '/', element: <Home />, },

    { path: '*', element: <NotFound /> },
  ]);
  return elements;
}
