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
      path: './components/admin/Home',
    },
    about: {
      link: '/about',
      title: 'About',
      path: './components/admin/About',
    },
    contact: {
      link: '/contact',
      title: 'Contact',
      path: './components/admin/Contact',
    },
  },
  customer: {
    home: {
      link: '/',
      title: 'Home',
      path: './components/customer/Home',
    },
    about: {
      link: '/about',
      title: 'About',
      path: './components/customer/About',
    },
    contact: {
      link: '/contact',
      title: 'Contact',
      path: './components/customer/Contact',
    },
  },
  client: {
    home: {
      link: '/',
      title: 'Home',
      path: './components/client/Home',
    },
    about: {
      link: '/about',
      title: 'About',
      path: './components/client/About',
    },
    contact: {
      link: '/contact',
      title: 'Contact',
      path: './components/client/Contact',
    },
  },
};
export const useGetUserRole = (role: Role) => {
  return rolesRights[role];
};

export default rolesRights;
