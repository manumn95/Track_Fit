import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../src/App.css";
import { basicSchema } from "../Formik/WorkoutSchema";
import { updateWorkout, userExercise } from "../api";
import { useState, useEffect } from "react";
const ExerciseModal = ({
  show,
  setShow,
  exerciseData,
  getUpdateId,
  setIsupdate,
  isupdate,
}) => {
  const handleClose = () => {
    setShow(false);
    setIsupdate(false);
    setData("");
  };

  const [data, setData] = useState({
    exercisename: exerciseData.exerciseName || "",
    date: exerciseData.date || "",
    duration: exerciseData.duration || "",
    sets: exerciseData.sets || "",
    steps: exerciseData.steps || "",
    calories: exerciseData.caloriesBurned || "",
  });

  useEffect(() => {
    {
      isupdate
        ? setData({
            exercisename: exerciseData.exerciseName || "",
            date: exerciseData.date || "",
            duration: exerciseData.duration || "",
            sets: exerciseData.sets || "",
            steps: exerciseData.steps || "",
            calories: exerciseData.caloriesBurned || "",
          })
        : setData({
            exercisename: "",
            date: "",
            duration: "",
            sets: "",
            steps: "",
            calories: "",
          });
    }
  }, [exerciseData]);

  const onSubmit = async (values, actions) => {
    const token = localStorage.getItem("track-fit-token");
    try {
      if (isupdate) {
        const response = await updateWorkout(getUpdateId, values, token);
        if (response) {
          toast.success("Exercise updated successfully!");
          actions.resetForm();

          setTimeout(() => {
            handleClose();
          }, 3000);
        }
      } else {
        const response = await userExercise(values, token);
        if (response) {
          toast.success("Exercise Added successfully!");
          actions.resetForm();
          setTimeout(() => {
            handleClose();
          }, 3000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: data,
      enableReinitialize: true,
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {isupdate ? "Update Exercise" : "Add Exercise"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exercisename" className="form-label">
                Exercise Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exercisename"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.exercisename}
              ></input>

              {errors.exercisename && touched.exercisename && (
                <p className="text-danger">{errors.exercisename}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
                id="date"
              ></input>

              {errors.date && touched.date && (
                <p className="text-danger">{errors.date}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">
                Duration
              </label>
              <input
                type="text"
                className="form-control"
                id="duration"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.duration}
                placeholder="in mins"
              ></input>

              {errors.duration && touched.duration && (
                <p className="text-danger">{errors.duration}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="sets" className="form-label">
                Sets
              </label>
              <input
                type="number"
                className="form-control"
                id="sets"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sets}
              ></input>

              {errors.sets && touched.sets && (
                <p className="text-danger">{errors.sets}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="steps" className="form-label">
                Steps
              </label>
              <input
                type="number"
                className="form-control"
                id="steps"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.steps}
              ></input>

              {errors.steps && touched.steps && (
                <p className="text-danger">{errors.steps}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="calories" className="form-label">
                Calories Burned
              </label>
              <input
                type="number"
                className="form-control"
                id="calories"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.calories}
              ></input>

              {errors.calories && touched.calories && (
                <p className="text-danger">{errors.calories}</p>
              )}
            </div>

            <button type="submit" className="btn gradient text-white border">
              {isupdate ? "Update" : "Add"}
            </button>
          </form>
        </Modal.Body>
        <ToastContainer position="top-center" />
      </Modal>
    </>
  );
};

export default ExerciseModal;
