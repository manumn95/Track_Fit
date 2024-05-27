import image from "../assets/images/diet.png";
import calories from "../assets/images/calories.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import healthy from "../assets/images/healthy.png";
import MealPlannerModal from "./MealPlannerModal";
const Diet = () => {
  const [name, setName] = useState("");
  const[show,setShow]= useState(false)
  const [nutriton, setNutrition] = useState([]);
  const navigate = useNavigate();

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

  return (
    <>
    <MealPlannerModal show={show} setShow={setShow}></MealPlannerModal>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="gradient text-center fw-bold rounded shadow d-flex gap-3">
              <img src={calories} style={{ width: "80px" }}></img>
              <p className=" d-flex justify-content-center align-items-center">
                Eat Up to 1250 kcal
              </p>
            </div>
            <button className=" mt-5 btn btn-success rounded shadow" onClick={()=>setShow(true)}>Add your meals</button>
            <div className="row mt-2">
             
              <div className="col-md-12">
                <h4>Breakfast</h4>
                <div className="p-4 border">
                  <div className="card">
                    <div className="card-body gradient"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <h4>Lunch</h4>
                <div className="p-4 border">
                  <div className="card">
                    <div className="card-body gradient"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <h4>Evening-Snaks</h4>
                <div className="p-4 border">
                  <div className="card">
                    <div className="card-body gradient"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <h4>Dinner</h4>
                <div className="p-4 border">
                  <div className="card">
                    <div className="card-body gradient"></div>
                  </div>
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
