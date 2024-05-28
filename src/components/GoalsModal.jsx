import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useFormik, Formik, Form } from "formik";
import { basicSchema } from "../Formik/GoalSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../src/App.css";
import axios from "axios";
import { userGoal } from "../api";
const GoalsModal = () => {
  let showmodals = JSON.parse(localStorage.getItem("showmodal"));

  const [shows, setShows] = useState();

  useEffect(() => {
    // Show the modal when the component mounts
    if (showmodals === true || showmodals === null) {
      setShows(true);
    } else {
      setShows(false);
    }
  }, []);

  const token = localStorage.getItem("track-fit-token");

  const onSubmit = async (values) => {
    try {
      const response = await userGoal(values, token);
      toast(response.data.message);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      localStorage.setItem("showmodal", JSON.stringify(!shows));
      setShows(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          `Request failed: ${
            error.response ? error.response.data.message : error.message
          }`
        );
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        radioGroup: "",
        age: "",
        height: "",
        weight: "",
        genderGroup: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <Modal
      show={shows}
      onHide={() => setShows(false)}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Body className="modal-content">
        <h1
          className="text-center text-gradient "
          style={{ fontFamily: "cursive" }}
        >
          `Set your Goal`
        </h1>
        <Formik>
          <Form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center mt-5">
              <fieldset
                id="radioGroup"
                label="One of these please"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.radioGroup}
                className="text-info-emphasis"
              >
                <input
                  type="radio"
                  name="radioGroup"
                  id="radioOption1"
                  label="Choose this option"
                  value="weight Loss"
                />
                weight Loss &nbsp; &nbsp; &nbsp;
                <input
                  type="radio"
                  name="radioGroup"
                  id="radioOption2"
                  label="Or choose this one"
                  value="Weight Gain"
                />
                Weight Gain
              </fieldset>
            </div>
            {errors.radioGroup && (
              <p className="text-danger">{errors.radioGroup}</p>
            )}
            <h5 className="mt-4 text-center text-decoration-underline">
              Personal Details
            </h5>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Your age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.age && touched.age && (
                <p className="text-danger">{errors.age}</p>
              )}
            </div>
            <div className="d-flex mb-3">
              <fieldset
                id="genderGroup"
                label="One of these please"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.genderGroup}
                className="text-info-emphasis"
              >
                <input
                  type="radio"
                  name="genderGroup"
                  id="gender1"
                  label="Choose this option"
                  value="male"
                />
                Male &nbsp; &nbsp; &nbsp;
                <input
                  type="radio"
                  name="genderGroup"
                  id="gender2"
                  label="Or choose this one"
                  value="female"
                />
                Female
              </fieldset>
            </div>
            {errors.genderGroup && (
              <p className="text-danger">{errors.genderGroup}</p>
            )}

            <div className="mb-3">
              <label htmlFor="height" className="form-label">
                Your Heigth
              </label>
              <input
                type="number"
                className="form-control"
                id="height"
                placeholder="in cm"
                value={values.height}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.height && touched.height && (
                <p className="text-danger">{errors.height}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="height" className="form-label">
                Your Weight
              </label>
              <input
                type="number"
                className="form-control"
                id="weight"
                placeholder="in kg"
                value={values.weight}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.weight && touched.weight && (
                <p className="text-danger">{errors.weight}</p>
              )}
            </div>

            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </Form>
        </Formik>
      </Modal.Body>

      <ToastContainer position="top-center" />
    </Modal>
  );
};

export default GoalsModal;
