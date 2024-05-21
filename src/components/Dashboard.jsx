
import GoalsModal from "./GoalsModal";
import Navbar from "./Navbar";
import '../../src/App.css'

const Dashboard = () => {
  return (
    <>
     <div className="home-container">
     <Navbar></Navbar>
      <GoalsModal></GoalsModal>
     </div>


    </>
  );
};

export default Dashboard;
