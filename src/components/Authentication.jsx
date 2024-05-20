import video from "../assets/videos/bg.mp4";

import "../../src/App.css";
import Modals from "./Modals";
import { useState } from "react";
const Authentication = () => {
  const [show, setShow] = useState(false);
  const [zindex, setZindex] = useState(null);

  const handleClick = () => {
    setShow(true);
    setZindex("1");
  };
  const handleStyleChange = (value) => {
    setZindex(value);
  };
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="video-background"
        style={{ zIndex: `${zindex}` }}
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className={zindex ? "zindex text-overlay" : "text-overlay"}>
        <h1 className="display-4">Welcome To Track-Fit</h1>
        <p className="lead text-success  text-center">
          `{"Keep track of your health"}`
        </p>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handleClick}
          >
            Explore More
          </button>
        </div>
      </div>

      <Modals show={show} setShow={setShow} change={handleStyleChange}></Modals>
    </>
  );
};

export default Authentication;
