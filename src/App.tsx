import { Container, Spinner } from 'reactstrap';

import ConfigContext from './context/ConfigContext';
import { useQuery } from '@tanstack/react-query';
import { userRole } from './config';
import dummyData from './data';
import Routes from './Routes';

const fetchConfig = async () => {
  const response = await fetch(
    'https://65d45ff93f1ab8c63434f864.mockapi.io/api/role-rights/r1'
  );
  const data = await response.json();
  return data;
};

const App = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['config'],
    queryFn: () => fetchConfig(),
  });

  const useApi = false;

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
      <Routes />
    </ConfigContext.Provider>
  );
};

export default App;
