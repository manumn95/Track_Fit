import { useState } from "react";
import "../../src/App.css";
import logo from "../assets/images/logo-transparent.png";
const Modal = ({ target }) => {
  const [signup, setSignup] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSignup(true);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    setSignup(false);
  };
  return (
    <>
      {!signup ? (
        <div
          className="modal fade"
          id={target}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className=" container mt-2 d-flex justify-content-end ">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="d-flex justify-content-center">
                <img className="logo" src={logo}></img>
              </div>

              <div className="modal-body">
                <div className="container">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      ></input>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="button" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                    <p className="text-center text-secondary mt-2">
                      Register here..&nbsp;
                      <a href="" onClick={handleClick}>
                        Sign Up
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="modal fade"
          id={target}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div></div>
            <div className="modal-content">
              <div className=" container mt-2 d-flex justify-content-end ">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="d-flex justify-content-center">
                <img className="logo" src={logo}></img>
              </div>

              <div className="modal-body">
                <div className="container">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputUserName"
                        className="form-label"
                      >
                        User Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputUserName"
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword2"
                        className="form-label"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword2"
                      ></input>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="button" className="btn btn-primary">
                        Sign Up
                      </button>
                    </div>
                    <p className="text-center text-secondary mt-2">
                      Already have an account..&nbsp;
                      <a href="" onClick={handleSignUp}>
                        Login
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
