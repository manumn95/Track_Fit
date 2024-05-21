import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useFormik, Formik, Form } from "formik";
import { basicSchema } from "../Formik/GoalSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GoalsModal = () => {
  let showmodals = JSON.parse(localStorage.getItem("showmodal"));
  console.log(showmodals);
  const [show, setShow] = useState();

  useEffect(() => {
    // Show the modal when the component mounts
    if (showmodals === true || showmodals === null) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  const onSubmit = async () => {
    toast("success");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    localStorage.setItem("showmodal", JSON.stringify(!show));
    setShow(false);
  };
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        radioGroup: "",
        age: "",
        height: "",
        weight: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Body>
        <h1 className="text-center" style={{ fontFamily: "cursive" }}>
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
            <h2 className="mt-4 text-center text-decoration-underline">
              Personal Details
            </h2>
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
              Save
            </button>
          </Form>
        </Formik>
      </Modal.Body>

      <ToastContainer position="top-center" />
    </Modal>
  );
};

export default GoalsModal;
