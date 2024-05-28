import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import "../../src/App.css";
import { basicSchema } from "../Formik/MealsSchema";
import { useFormik } from "formik";
import { useState } from "react";
import { breakfast, dinner, lunch, snakes } from "../api";
const MealPlannerModal = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };

  const [button, setButton] = useState("");

  const onSubmit = async (values, action) => {
    const token = localStorage.getItem("track-fit-token");
    try {
      let dbRes;
      if (button === "breakfast") {
        dbRes = await breakfast(values, token);
        if (dbRes) {
          toast(dbRes.data.message);
          setTimeout(() => {
            setShow(false);
            action.resetForm();
          }, 2000);
        }
      }
      if (button === "lunch") {
        dbRes = await lunch(values, token);
        if (dbRes) {
          toast(dbRes.data.message);
          setTimeout(() => {
            setShow(false);
            action.resetForm();
          }, 2000);
        }
      }
      if (button === "snakes") {
        dbRes = await snakes(values, token);
        if (dbRes) {
          toast(dbRes.data.message);
          setTimeout(() => {
            setShow(false);
            action.resetForm();
          }, 2000);
        }
      }
      if (button === "dinner") {
        dbRes = await dinner(values, token);
        if (dbRes) {
          toast(dbRes.data.message);
          setTimeout(() => {
            setShow(false);
            action.resetForm();
          }, 2000);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        dishName: "",
        calories: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton onClick={handleClose}></Modal.Header>
        <Modal.Body>
          <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Dish Name</label>
              <input
                className={
                  errors.dishName && touched.dishName
                    ? "input-error form-control"
                    : "form-control"
                }
                name="dishName"
                id="dishName"
                value={values.dishName}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.dishName && touched.dishName && (
                <p className="text-danger">{errors.dishName}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Calories</label>
              <input
                type="number"
                className={
                  errors.calories && touched.calories
                    ? "input-error form-control"
                    : "form-control"
                }
                id="calories"
                name="calories"
                value={values.calories}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.calories && touched.calories && (
                <p className="text-danger">{errors.calories}</p>
              )}
            </div>
            <div className="d-flex gap-1">
              <button
                className="rounded 
               btn-success"
                type="submit"
                onClick={() => setButton("breakfast")}
              >
                Add-Breakfast
              </button>
              <button
                className="rounded btn-success"
                type="submit"
                onClick={() => setButton("lunch")}
              >
                Add-Lunch
              </button>
              <button
                className="rounded btn-success"
                type="submit"
                onClick={() => setButton("snakes")}
              >
                Add-Evening-Snaks
              </button>
              <button
                className="rounded btn-success"
                type="submit"
                onClick={() => setButton("dinner")}
              >
                Add-Dinner
              </button>
            </div>
          </form>
        </Modal.Body>
        <ToastContainer position="top-center" />
      </Modal>
    </>
  );
};

export default MealPlannerModal;
