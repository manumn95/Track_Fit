import "../../src/App.css";
import video from "../assets/videos/bg.mp4";
import GoalsModal from "./GoalsModal";
const Dashboard = () => {
  return <>
   <video
        autoPlay
        loop
        muted
        className="video-background"
      >
        <source src={video} type="video/mp4" />
      </video>
  <GoalsModal></GoalsModal>
  </>;
};

export default Dashboard;
