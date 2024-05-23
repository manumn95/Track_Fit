import logo from "../assets/images/logo-transparent.png";
import "../../src/App.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.setItem("showmodal", true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light">
        <div className="container">
          <Link to="/landing" className="navbar-brand">
            <img style={{ width: "100px" }} src={logo} alt="" width="225" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <NavLink to="/landing/home" className="nav-link fw-semibold  ">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/landing/activities"
                  className="nav-link fw-semibold  "
                >
                  Activities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/landing/diet"
                  className="nav-link fw-semibold  "
                >
                 Diet
                </NavLink>
              </li>
            </ul>
            <div className="d-flex ms-auto gap-3">
              <h4 className="fs-3 fw-medium gradient rounded-circle p-2 text-white">
                M
              </h4>
              <h4 className=" fs-3 fw-medium gradient-text">manumn</h4>
              <form onSubmit={handleLogout}>
                <button type="submit" className="btn btn-danger">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
