import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import { Container } from '../Container/container.styled';

const Layout = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
};

export default Layout;
