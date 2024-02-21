export type Role = 'admin' | 'customer' | 'client';
export type Page = 'home' | 'about' | 'contact';
export type RoleRights = {
  [key in Role]: {
    [key in Page]: {
      link: string;
      title: string;
      path: string;
    };
  };
};
export function getData() {
  return fetch(
    'https://65d45ff93f1ab8c63434f864.mockapi.io/api/role-rights/r1'
  ).then(response => response.json());
}

const rolesRights: RoleRights = {
  admin: {
    home: {
      link: '/',
      title: 'Home',
      path: './components/templates/admin-area/Home',
    },
    about: {
      link: '/about',
      title: 'About',
      path: './components/templates/admin-area/About',
    },
    contact: {
      link: '/contact',
      title: 'Contact',
      path: './components/templates/admin-area/Contact',
    },
  },
  customer: {
    home: {
      link: '/',
      title: 'Home',
      path: './components/templates/customer-area/Home',
    },
    about: {
      link: '/about',
      title: 'About',
      path: './components/templates/customer-area/About',
    },
    contact: {
      link: '/contact',
      title: 'Contact',
      path: './components/templates/customer-area/Contact',
    },
  },
  client: {
    home: {
      link: '/',
      title: 'Home',
      path: './components/templates/client-area/Home',
    },
    about: {
      link: '/about',
      title: 'About',
      path: './components/templates/client-area/About',
    },
    contact: {
      link: '/contact',
      title: 'Contact',
      path: './components/templates/client-area/Contact',
    },
  },
};
export const useGetUserRole = (role: Role) => {
  return rolesRights[role];
};

export default rolesRights;
