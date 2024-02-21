import { Container, Spinner } from 'reactstrap';
import Navbar from './Navbar';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import useUserConfig from './config/useUserConfig';
import ConfigContext from './context/ConfigContext';
import { useQuery } from '@tanstack/react-query';
import { userRole } from './config';
import dummyData from './data';

function App() {
  const data = useUserConfig();

  const homePath = data.home.path;
  const HomeComponent = lazy(() => import(`${homePath}`));

  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}

const fetchConfig = async () => {
  const response = await fetch(
    'https://65d45ff93f1ab8c63434f864.mockapi.io/api/role-rights/r1'
  );
  const data = await response.json();
  return data;
};

const Wrapper = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['config'],
    queryFn: () => fetchConfig(),
  });

  const useApi = true;

  const routesData = useApi ? data?.[0]?.data : dummyData;
  const role = useApi ? data?.[0]?.role : userRole;

  if (isLoading)
    return (
      <Container
        fluid
        style={{ height: '100vh' }}
        className="d-flex align-items-center justify-content-center"
      >
        <Spinner color="primary" />
      </Container>
    );

  if (isError) return <div>Error - something went wrong</div>;

  return (
    <ConfigContext.Provider
      value={{
        role,
        data: routesData,
      }}
    >
      <App />
    </ConfigContext.Provider>
  );
};

export default Wrapper;
