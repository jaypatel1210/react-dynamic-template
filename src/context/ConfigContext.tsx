import { createContext } from 'react';
import { Role, RoleRights } from '../data';

type ConfigContextType = {
  data: RoleRights;
  role: Role;
} | null;

const ConfigContext = createContext<ConfigContextType | null>(null);

export default ConfigContext;
