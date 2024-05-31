import { useState } from "react";
import "../../src/App.css";
import logo from "../assets/images/logo-transparent.png";
import { useFormik } from "formik";
import Modal from "react-bootstrap/Modal";
import { basicSchema } from "../Formik/SignupSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogIn, userSignUp } from "../api";
import { loginSuccess } from "../redux/reducers/userSlice";

const Modals = ({ show, setShow, change }) => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState(false);

  const [logindata, setloginData] = useState({
    username: "",
    password: "",
  });

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
  const dispatch = useDispatch();
  const onSubmit = async (values, actions) => {
    try {
      const response = await userSignUp(values);
      toast(response.data.message);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      actions.resetForm();
      setSignup(false);
    } catch (error) {
      console.log(error);
    }
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

  // login functionality
  const handleDatachange = (event) => {
    const { name, value } = event.target;

    setloginData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogIn(logindata);
      if (response?.data?.token) {
        dispatch(loginSuccess(response.data));
        setloginData({
          username: "",
          password: "",
        });

        toast.success(response.data.message);

        window.location.reload();
        setTimeout(() => {
          navigate("/landing");
          localStorage.setItem("showmodal", true);
          window.location.reload();
        }, 2000);
      } else {
        setloginData({
          username: "",
          password: "",
        });
        toast.error(response.data);
      }
    } catch (error) {
      console.log(error);
    }
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
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="username"
                  required
                  value={logindata.username}
                  onChange={handleDatachange}
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
                  name="password"
                  required
                  value={logindata.password}
                  onChange={handleDatachange}
                ></input>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
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
            <ToastContainer position="top-center" />
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
