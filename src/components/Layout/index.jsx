import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, NavLinkStyled } from './index.styled';
import { AppBar } from 'components/AppBar';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Layout Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
