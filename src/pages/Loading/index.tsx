import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import Loading from 'components/Loading';

const Container = styled(Box)<BoxProps>({
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const LoadingPage = () => {
  return (
    <Container>
      <Loading />
    </Container>
  );
};
export default LoadingPage;
