import { useState } from "react";
import "../../src/App.css";
import logo from "../assets/images/logo-transparent.png";
import { useFormik } from "formik";
import Modal from "react-bootstrap/Modal";
import { basicSchema } from "../Formik/SignupSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Modals = ({ show, setShow, change }) => {
  const [signup, setSignup] = useState(false);

  const handleClose = () => {
    setShow(false);
    change("0");
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSignup(true);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    setSignup(false);
  };

  // Formik

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    toast.success("Account Created Successfully");
  };

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

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
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  className={
                    errors.username && touched.username
                      ? "input-error form-control"
                      : "form-control"
                  }
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.username && touched.username && (
                  <p className="text-danger">{errors.username}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className={
                    errors.email && touched.email
                      ? "input-error form-control"
                      : "form-control"
                  }
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.email && touched.email && (
                  <p className="text-danger">{errors.email}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className={
                    errors.password && touched.password
                      ? "input-error form-control"
                      : "form-control"
                  }
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.password && touched.password && (
                  <p className="text-danger">{errors.password}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "input-error form-control"
                      : "form-control"
                  }
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="text-danger">{errors.confirmPassword}</p>
                )}
              </div>

              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
                <ToastContainer position="top-center" />
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
