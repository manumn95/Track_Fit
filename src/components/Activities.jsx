import { useState, useEffect } from "react";
import image from "../assets/images/activity.png";
import Exercise from "./Exercise";
import ExerciseModal from "./ExerciseModal";
import CircularProgress from "@mui/material/CircularProgress";
import { getWorkouts } from "../api";

const Activities = () => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [value, setValue] = useState(0);
  const [workoutdata, setWorkoutData] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    setProgress((preVal) => (preVal >= 100 ? 0 : preVal + 10));
    setValue((preVal) => (preVal >= 10 ? 0 : (preVal += 1)));
  };
  const handleDec = () => {
    setProgress((preVal) => (preVal <= 0 ? null : preVal - 10));
    setValue((preVal) => (preVal <= 0 ? 0 : (preVal -= 1)));
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("progress");
    if (storedValue) {
      setProgress(parseInt(storedValue));
    }
    const storedValue2 = localStorage.getItem("answer");
    if (storedValue2) {
      setValue(parseInt(storedValue2));
    }
  }, []);

  const token = localStorage.getItem("track-fit-token");
  const workouts = async () => {
    const response = await getWorkouts(token);
    if (response) {
      setWorkoutData(response.data);
      setTimeout(() => {
        setCounter(counter + 1);
      }, 3000);
    }
  };

  useEffect(() => {
    workouts();
    localStorage.setItem("progress", progress);
    localStorage.setItem("answer", value);
  }, [progress, value, show, counter]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center">
            <h2 className="fw-semibold" style={{ fontFamily: "cursive" }}>
              Hello,<span className="fw-bold gradient-text">Manu!</span>
            </h2>
            <p className="lead ">Track your workouts..</p>
            <div className="card shadow">
              <div className="d-flex p-3 gap-3">
                <i
                  className="bi bi-plus-circle-fill fs-4"
                  onClick={handleInc}
                  style={{ cursor: "pointer" }}
                ></i>

                <CircularProgress
                  variant="determinate"
                  value={progress}
                  className="border rounded-circle"
                />
                <i
                  className="bi bi-dash-circle fs-4"
                  onClick={handleDec}
                  style={{ cursor: "pointer" }}
                ></i>
                <span className="fs-4 text-warning">={value}</span>
                <i className="bi bi-cup-straw fs-4"></i>
              </div>

              <p className="text-muted">Drink 10 glasses of water</p>
            </div>
          </div>
          <div className="col-md-9 text-center">
            <img style={{ width: "200px" }} src={image}></img>
            <p className="text-muted">
              Burning your Calories helps you get fitter,healthier and lose
              weigth
            </p>
            <button
              className="btn gradient text-white fs-6"
              onClick={() => setShow(true)}
            >
              Add Exercise
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <h2 className="gradient-text">
            Your Activities.
            <span>
              <i className="bi bi-radioactive"></i>
            </span>
          </h2>
          {workoutdata.map((data, i) => {
            return (
              <div key={i} className="col-md-4">
                <Exercise
                  exerciseName={data.exerciseName}
                  date={data.date}
                  duration={data.duration}
                  sets={data.sets}
                  steps={data.steps}
                  caloriesBurned={data.caloriesBurned}
                  id={data._id}
                  setCounter
                  counter
                ></Exercise>
              </div>
            );
          })}
        </div>
      </div>
      <ExerciseModal show={show} setShow={setShow}></ExerciseModal>
    </>
  );
};

export default Activities;
