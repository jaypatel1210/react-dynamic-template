import { Role } from '../data';

const userRole: Role = (import.meta.env.VITE_USER_ROLE as Role) ?? 'admin';
export { userRole };
