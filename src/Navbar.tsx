import { Link, Outlet } from 'react-router-dom';
import useUserConfig from './config/useUserConfig';
import { NavItem } from 'reactstrap';

const Navbar = () => {
  const data = useUserConfig();
  const routes = Object.values(data);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {routes.map(route => (
                <NavItem className="p-2" key={route.title}>
                  <Link className="text-white" to={`${route.link}`}>
                    {route.title}
                  </Link>
                </NavItem>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
