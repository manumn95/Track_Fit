import { useState } from "react";
import "../../src/App.css";
import logo from "../assets/images/logo-transparent.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Modals = ({ show, setShow, change }) => {
  const [signup, setSignup] = useState(false);
  const [modalclose, setModalClose] = useState("modal");

  const handleClose = () => {
    setShow(false);
    change("0");
  };
  const handleShow = () => setShow(true);

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
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton onClick={handleClose}></Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center">
              <img className="logo" src={logo}></img>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
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
                <label htmlFor="exampleInputPassword1" className="form-label">
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
              <p className="text-center mt-2">
                Register Here..&nbsp;
                <a href="" onClick={handleClick}>
                  Sign Up
                </a>
              </p>
            </form>
          </Modal.Body>
        </Modal>
      ) : (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton onClick={handleClose}></Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center">
              <img className="logo" src={logo}></img>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputUsername" className="form-label">
                  User Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputUsername"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
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
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  confirm Password
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
              <p className="text-center mt-2">
                Already have an account..&nbsp;
                <a href="" onClick={handleSignUp}>
                  Login
                </a>
              </p>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Modals;
