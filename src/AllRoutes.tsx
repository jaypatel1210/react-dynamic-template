import { useParams } from 'react-router-dom';
import { Page } from './data';
import { Suspense, lazy } from 'react';
import { Container } from 'reactstrap';
import useUserConfig from './config/useUserConfig';

const AllRoutes = () => {
  const { component } = useParams();

  const data = useUserConfig();
  const componentPath =
    data[component as Page]?.path ?? './components/NotFound';

  const DynamicComponent = lazy(() => import(`${componentPath}`));

  return (
    <Container
      className="p-0 d-flex align-items-center justify-content-center"
      fluid
      style={{ height: '100vh' }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
    </Container>
  );
};

export default AllRoutes;
