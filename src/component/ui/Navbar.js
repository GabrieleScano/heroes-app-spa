import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar  navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            LOGO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  exact
                  to="/marvel"
                >
                  Marvel
                </NavLink>{" "}
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  exact
                  to="/dc"
                >
                  DC
                </NavLink>{" "}
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  exact
                  to="/search"
                >
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  exact
                  to="/login"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
