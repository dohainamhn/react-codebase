import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export default ({ children }: Props) => {
  return <div>
    Public
    {children}
  </div>;
};
