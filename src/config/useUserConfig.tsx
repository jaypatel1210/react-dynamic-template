import { useContext } from 'react';
import ConfigContext from '../context/ConfigContext';
import { Role, RoleRights } from '../data';

const useUserConfig = () => {
  const contextConfig = useContext(ConfigContext);

  const data = contextConfig?.data[contextConfig.role];

  return data as RoleRights[Role];
};

export default useUserConfig;
