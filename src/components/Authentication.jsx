import video from "../assets/videos/bg.mp4";
import logo from "../assets/images/logo-transparent.png";
import "../../src/App.css";
const Authentication = () => {
  return (
    <>
      <video autoPlay loop muted className="video-background">
        <source src={video} type="video/mp4" />
      </video>
      <div className="text-overlay">
        <h1 className="display-4">Welcome To Track-Fit</h1>
        <p className="lead text-success  text-center">
          `{"Keep track of your health"}`
        </p>
        <div className="d-flex justify-content-center">
          <button className="btn" type="button">Explore More</button>
        </div>
      </div>
      <div>
        <img className="logo" src={logo}></img>
      </div>
    </>
  );
};

export default Authentication;
