import video from "../assets/videos/bg.mp4";
import logo from "../assets/images/logo-transparent.png";
import "../../src/App.css";
import Modal from "./Modal";
import { useState } from "react";
const Authentication = () => {

  const[modalId,setModalId]=useState('exampleModal');

  const handleClick = () => {
    setModalId("exampleModal");
  };

  return (
    <>
    
        <img className="logo" src={logo}></img>
        <video autoPlay loop muted className="video-background">
          <source src={video} type="video/mp4" />
        </video>
  

      <div className="text-overlay ">
        <h1 className="display-4">Welcome To Track-Fit</h1>
        <p className="lead text-success  text-center">
          `{"Keep track of your health"}`
        </p>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleClick}>
            Explore More
          </button>
        </div>
      </div>

        <Modal target = {modalId}></Modal>
    
    </>
  );
};

export default Authentication;
