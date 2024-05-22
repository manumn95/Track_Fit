import GoalsModal from "./GoalsModal";
import Navbar from "./Navbar";
import "../../src/App.css";
import { Outlet } from "react-router-dom";

const Landingpage = () => {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <GoalsModal></GoalsModal>
       
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Landingpage;
