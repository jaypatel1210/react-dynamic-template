import Navbar from './Navbar';
import { Suspense, lazy } from 'react';
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes as RRoutes,
} from 'react-router-dom';
import AllRoutes from './AllRoutes';
import useUserConfig from './config/useUserConfig';
import { Container } from 'reactstrap';

const Routes = () => {
  const data = useUserConfig();

  const homePath = data.home.path;
  const HomeComponent = lazy(() => import(`${homePath}`));

  return (
    <BrowserRouter>
      <RRoutes>
        <Route path="/" element={<Outlet />}>
          <Route element={<Navbar />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Container
                    className="p-0 d-flex align-items-center justify-content-center"
                    fluid
                    style={{ height: '100vh' }}
                  >
                    <HomeComponent />
                  </Container>
                </Suspense>
              }
            />
            <Route path="/:component" element={<AllRoutes />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Route>
      </RRoutes>
    </BrowserRouter>
  );
};

export default Routes;
