import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

export default ({ children }: Props) => {
  return (
    <div>
      <Link to={'/login'}>Login</Link>
      <div></div>
      <Link to={'/'}>Home</Link>
      {children}
    </div>
  );
};
