import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../src/App.css";
import { basicSchema } from "../Formik/WorkoutSchema";
import { userExercise } from "../api";
const ExerciseModal = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };

  const onSubmit = async (values, actions) => {
    const token = localStorage.getItem("track-fit-token");
    try {
      const dbRes = await userExercise(values, token);
      if (dbRes) {
        toast(dbRes.data.message);
        setTimeout(() => {
          actions.resetForm();
          setShow(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        date: "",
        duration: "",
        sets: "",
        steps: "",
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
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Exercise Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              ></input>

              {errors.name && touched.name && (
                <p className="text-danger">{errors.name}</p>
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
              Add Exercsie
            </button>
            <ToastContainer position="top-center" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ExerciseModal;
