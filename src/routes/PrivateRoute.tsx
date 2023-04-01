import React, { FC } from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';

interface Props {
  component: typeof React.Component;
  auth: boolean;
}

const PrivateRoute: FC<Props> = ({ component: Component, auth = true, ...rest }) => {
  // const auth = useAuth();
  // return auth ? <Outlet /> : <Navigate to="/login" />;
  return <></>;
};

export default PrivateRoute;
