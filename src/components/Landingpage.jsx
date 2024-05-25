import GoalsModal from "./GoalsModal";
import Navbar from "./Navbar";
import "../../src/App.css";
import { Outlet } from "react-router-dom";

const Landingpage = () => {
  return (
    <>
      <Navbar></Navbar>
      <GoalsModal></GoalsModal>

      <Outlet></Outlet>
    </>
  );
};

export default Landingpage;
