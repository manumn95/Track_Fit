import { useState } from "react";
import image from "../assets/images/activity.png";
import Exercise from "./Exercise";
import ExerciseModal from "./ExerciseModal";

const Activities = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center">
            <h2 className="fw-semibold" style={{ fontFamily: "cursive" }}>
              Hello,<span className="fw-bold gradient-text">Manu!</span>
            </h2>
            <p className="lead ">Track your workouts..</p>
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
        <div className="row">
          <h2 className="gradient-text">
            Your Activities.
            <span>
              <i className="bi bi-radioactive"></i>
            </span>
          </h2>
          <div className="col-md-4">
            <Exercise></Exercise>
          </div>
        </div>
      </div>
      <ExerciseModal show={show} setShow={setShow}></ExerciseModal>
    </>
  );
};

export default Activities;
