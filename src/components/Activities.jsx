import image from "../assets/images/activity.png";
import Exercise from "./Exercise";

const Activities = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img style={{ width: "200px" }} src={image}></img>
            <p className="text-muted">
              Burning your Calories helps you get fitter,healthier and lose
              weigth
            </p>
            <button className="btn gradient text-white fs-6">
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
    </>
  );
};

export default Activities;
