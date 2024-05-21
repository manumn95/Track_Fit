import logo from "../assets/images/logo-transparent.png";
import "../../src/App.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const handleLogout = () => {
    localStorage.setItem("showmodal", true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
        <div className="container">
          <a href="index.html" className="navbar-brand">
            <img style={{ width: "100px" }} src={logo} alt="" width="225" />
          </a>
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
                <NavLink to="/dashboard" className="nav-link fw-semibold text-white">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="" className="nav-link fw-semibold text-white">
                  Details
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="" className="nav-link fw-semibold text-white">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="d-flex ms-auto gap-3">
              <h4 className="text-warning fs-3 fw-medium">Welcome manumn</h4>
              <form onSubmit={handleLogout}>
                {" "}
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
