import image from "../assets/images/diet.png";
import calories from "../assets/images/calories.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import healthy from "../assets/images/healthy.png";
import MealPlannerModal from "./MealPlannerModal";
import { useSelector } from "react-redux";
import {
  getBreakfast,
  getLunch,
  getSnakes,
  getDinner,
  deleteBreakfast,
  deleteLunch,
  deleteSnakes,
  deleteDinner,
} from "../api";

const Diet = () => {
  const dailyCalories = useSelector((state) => state.user.dailycalories);
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [nutriton, setNutrition] = useState([]);
  const navigate = useNavigate();
  const [breakfastData, setBreakfastData] = useState([]);
  const [lunchData, setlunchData] = useState([]);
  const [snakesData, setsnakesData] = useState([]);
  const [dinnerData, setdinnerData] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = async () => {
    try {
      const response = await axios.get(
        `https://api.calorieninjas.com/v1/nutrition?query=${name}`,
        {
          headers: {
            "X-Api-Key": "b2jbf96W9BegSMgvAjDH+Q==TY6qObMQnYkrHVUg",
          },
        }
      );
      if (response) {
        setNutrition(response.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const token = localStorage.getItem("track-fit-token");
  //get BreakfastData
  const getBreakfastData = async () => {
    try {
      const response = await getBreakfast(token);
      setBreakfastData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //get LunchData
  const getLunchData = async () => {
    try {
      const response = await getLunch(token);
      setlunchData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //get SnakesData

  const getSnakesData = async () => {
    try {
      const response = await getSnakes(token);
      setsnakesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //get DinnerData

  const getDinnerData = async () => {
    try {
      const response = await getDinner(token);
      setdinnerData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //delete breakfast

  const handleDelete = async (e) => {
    const { id, name } = e.target;
    if (id) {
      if (name === "breakfast") {
        const response = await deleteBreakfast(id, token);
        if (response) {
          getBreakfastData();
        }
      } else if (name === "lunch") {
        console.log("lunch");
        const response = await deleteLunch(id, token);
        if (response) {
          getLunchData();
        }
      } else if (name === "snakes") {
        const response = await deleteSnakes(id, token);
        if (response) {
          getSnakesData();
        }
      } else if (name === "dinner") {
        const response = await deleteDinner(id, token);
        if (response) {
          getDinnerData();
        }
      }
    }
  };

  useEffect(() => {
    getBreakfastData();
    getLunchData();
    getSnakesData();
    getDinnerData();
  }, [show]);

  return (
    <>
      <MealPlannerModal show={show} setShow={setShow}></MealPlannerModal>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="gradient text-center fw-bold rounded shadow d-flex gap-3">
              <img src={calories} style={{ width: "80px" }}></img>
              <p className=" d-flex justify-content-center align-items-center">
                Eat Up to {dailyCalories} kcal
              </p>
            </div>
            <button
              className=" mt-5 btn btn-success rounded shadow"
              onClick={() => setShow(true)}
            >
              Add your meals
            </button>
            <div className="row mt-2">
              <div className="col-md-12">
                <h4>Breakfast</h4>
                <div className="mb-3 rounded border p-3">
                  {breakfastData.map((data, i) => {
                    return (
                      <div key={i} className="card">
                        <div
                          className="card-body gradient d-flex justify-content-between"
                          style={{ height: "10px" }}
                        >
                          <h6 className="d-flex align-items-center justify-content-center">
                            {data.dishName.toUpperCase()}
                          </h6>
                          <p className="d-flex align-items-center justify-content-center">
                            {data.calories} kcal
                          </p>
                          <button
                            className="rounded btn text-white border shadow d-flex align-self-center"
                            name="breakfast"
                            id={data._id}
                            onClick={handleDelete}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-12">
                <h4>Lunch</h4>
                <div className="mb-3 rounded border p-3">
                  {lunchData.map((data, i) => {
                    return (
                      <div key={i} className="card">
                        <div
                          className="card-body gradient d-flex justify-content-between"
                          style={{ height: "10px" }}
                        >
                          <h6 className="d-flex align-items-center justify-content-center">
                            {data.dishName.toUpperCase()}
                          </h6>
                          <p className="d-flex align-items-center justify-content-center">
                            {data.calories} kcal
                          </p>
                          <button
                            className="rounded btn text-white border shadow d-flex align-self-center"
                            name="lunch"
                            id={data._id}
                            onClick={handleDelete}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-12">
                <h4>Evening-Snaks</h4>
                <div className="mb-3 rounded border p-3">
                  {snakesData.map((data, i) => {
                    return (
                      <div key={i} className="card">
                        <div
                          className="card-body gradient d-flex justify-content-between"
                          style={{ height: "10px" }}
                        >
                          <h6 className="d-flex align-items-center justify-content-center">
                            {data.dishName.toUpperCase()}
                          </h6>
                          <p className="d-flex align-items-center justify-content-center">
                            {data.calories} kcal
                          </p>
                          <button
                            className="rounded btn text-white border shadow d-flex align-self-center"
                            name="snakes"
                            id={data._id}
                            onClick={handleDelete}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-12">
                <h4>Dinner</h4>
                <div className="mb-3 rounded border p-3">
                  {dinnerData.map((data, i) => {
                    return (
                      <div key={i} className="card">
                        <div
                          className="card-body gradient d-flex justify-content-between"
                          style={{ height: "10px" }}
                        >
                          <h6 className="d-flex align-items-center justify-content-center">
                            {data.dishName.toUpperCase()}
                          </h6>
                          <p className="d-flex align-items-center justify-content-center">
                            {data.calories} kcal
                          </p>
                          <button
                            className="rounded btn text-white border shadow d-flex align-self-center"
                            name="dinner"
                            id={data._id}
                            onClick={handleDelete}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <img src={image} style={{ maxWidth: "250px" }}></img>
            <div className="text-center">
              <button
                className="btn bg-black text-white shadow "
                onClick={() => navigate("/landing/recipes")}
              >
                Find Recipes
              </button>
              <div className="row mt-4">
                <img src={healthy}></img>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <h4 className="text-success">Nutrition information</h4>
            <div className="mb-2" style={{ position: "relative" }}>
              <input
                className="rounded form-control"
                placeholder="e.g,(banana,milk,apple,chicken sandwitch)"
                onChange={handleChange}
                value={name}
              ></input>{" "}
              <i
                className="bi bi-arrow-clockwise  rounded-circle p-1 fs-5 "
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setName(""), setNutrition("");
                }}
              ></i>
              <button
                className="gradient rounded btn mt-2"
                onClick={handleClick}
              >
                search
              </button>
            </div>
            {!nutriton.length ? (
              <p>Loading....</p>
            ) : (
              <>
                {nutriton.map((data, i) => {
                  return (
                    <table key={i} className="table table-warning">
                      <thead className="tabel-head">
                        <tr>
                          <th>Name</th>
                          <td>{data.name.toUpperCase()}</td>
                        </tr>
                        <tr>
                          <th>Calories</th>
                          <td>{data.calories} cal</td>
                        </tr>
                        <tr>
                          <th>Fat</th>
                          <td>{data.carbohydrates_total_g} g</td>
                        </tr>
                        <tr>
                          <th>Saturated_Fat</th>
                          <td>{data.fat_saturated_g} g</td>
                        </tr>
                        <tr>
                          <th>Protein</th>
                          <td>{data.protein_g} g</td>
                        </tr>
                        <tr>
                          <th>Sodium</th>
                          <td>{data.sodium_mg} mg</td>
                        </tr>
                        <tr>
                          <th>Pottasium</th>
                          <td>{data.potassium_mg} mg</td>
                        </tr>
                        <tr>
                          <th>Cholestrol</th>
                          <td>{data.cholesterol_mg} mg</td>
                        </tr>
                        <tr>
                          <th>Carbohydates</th>
                          <td>{data.carbohydrates_total_g} g</td>
                        </tr>
                        <tr>
                          <th>Fiber</th>
                          <td>{data.fiber_g} g</td>
                        </tr>
                        <tr>
                          <th>Sugar</th>
                          <td>{data.sugar_g} g</td>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Diet;
