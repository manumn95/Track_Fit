import StatCard from "./charts/StatCard";

import { useState, useEffect } from "react";
import image1 from "../assets/images/dashboard.png";
import Pie from "./charts/Pie";
import Line from "./charts/Line";
import axios from "axios";
import { useDispatch } from "react-redux";
import { dailyCaloriesData } from "../redux/reducers/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const stepsData = [3000, 5000, 7000, 8000, 12000, 14000, 10000];
  const caloriesData = [200, 300, 400, 500, 600, 700, 800];

  const [greeting, setGreeting] = useState("");
  const [goal, setGoal] = useState("your Goal");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [dailycalories, setDailyCalories] = useState();
  const [heartRate, setHeartRate] = useState();

  //to get the goal from db
  const token = localStorage.getItem("track-fit-token");
  const getGaol = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/getGoals", {
        headers: { auth: token },
      });
      console.log(response);
      if (response) {
        let hr = 220 - response.data[0].age;
        setGoal(response.data[0].goal);
        setWeight(response.data[0].weight);
        setAge(response.data[0].age);

        setHeartRate(hr);

        if (response.data[0].gender === "male") {
          const bmr =
            88.362 +
            13.397 * response.data[0].weight +
            4.799 * response.data[0].height -
            5.677 * age;
          setDailyCalories(bmr.toFixed(2));
          dispatch(dailyCaloriesData(bmr.toFixed(2)));
        } else if (response.data[0].gender === "female") {
          const bmr =
            447.593 +
            9.247 * response.data[0].weight +
            3.098 * response.data[0].height -
            4.33 * age;
          setDailyCalories(bmr.toFixed(2));
          dispatch(dailyCaloriesData(bmr.toFixed(2)));
        } else {
          throw new Error('Gender should be either "male" or "female"');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGaol();
    const updateGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    };

    updateGreeting();
    const intervalId = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <h2 className="fw-semibold" style={{ fontFamily: "cursive" }}>
              {greeting},<span className="fw-bold gradient-text">Manu!</span>
            </h2>
            <p className="lead ">Track Your fitness here..</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img style={{ width: "50%" }} src={image1}></img>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-8">
            <div className="row ">
              <StatCard
                title="Heart Rate"
                value={`${heartRate} bpm`}
                icon="bi bi-activity fs-2"
              />
              <StatCard
                title="Steps Taken"
                value={stepsData.reduce((a, b) => a + b, 0)}
                icon="bi bi-person-walking fs-2"
              />
              <StatCard
                title="Calories Burned"
                value={caloriesData.reduce((a, b) => a + b, 0)}
                icon="bi bi-fire fs-2"
              />
            </div>
          </div>
          <div className="col-md-4 text-center mt-4">
            <h4>Welcome to Track-Fit!</h4>
            <p className="text-muted">Move Your body,shape your future</p>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-md-4">
            <Pie></Pie>
          </div>
          <div className="col-md-4 ">
            <Line></Line>
          </div>
          <div className="col-md-4">
            <h3 className="text-center fw-bold">Your Goal</h3>
            <div className="card">
              <div className="card-body">
                <h5 className="text-center fw-bold fs-3 gradient-text">
                  {goal}
                </h5>
                <div className="d-flex justify-content-between">
                  <p className="text-info fw-bold">Weight:{weight}kg</p>
                  <p className="text-info fw-bold">Age:{age}yrs</p>
                </div>
                <div className="card">
                  <div className="card-body gradient rounded">
                    <div className="d-flex gap-4">
                      <i className="bi bi-snow2"></i>
                      <h5>
                        Eat up to <strong>{dailycalories} kcal</strong>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
