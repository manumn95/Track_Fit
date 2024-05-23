import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import nomeals from '../assets/images/noMeals.jpg'
import ShimmerReceipe from "./ShimmerReceipe";

const MealsCard = () => {
  const [meal, setMeals] = useState([]);

  const { meals } = useParams();

  useEffect(() => {
    getMeals();
  }, []);

  const getMeals = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`
      );
      if (response) {
        setMeals(response.data.meals);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meal);
  return (
    <>
      {!meal ? (
        <div>
         
          <div className=" gradient-text fixed-top fw-bold">
            <button className="btn border" onClick={() => history.back()}>
              Back
            </button>
          </div>
          <h1 className="text-center gradient-text">
            Currently No Recpies Found....
            <p className="lead">we will update soon</p>
          </h1>
         <div className="container d-flex justify-content-center">
          <img src={nomeals} style={{width:'500px'}}></img>
         </div>
        </div>
      ) :<>{!meal.length?(<ShimmerReceipe></ShimmerReceipe>):(
        <div className="container">

          <div className=" gradient-text fixed-top">
            <button className="btn border" onClick={() => history.back()}>
              Back
            </button>
          </div>

          <div className="row">
            <h1 className="text-center gradient-text fw-bold">
              {meals}-Dishes
            </h1>
            {meal.map((data, i) => {
              return (
                <div className="col-md-12 mb-5" key={i}>
                  <div className="card shadow">
                    <div className="card-body rounded">
                      <div className="row">
                        <div className="col-md-9">
                          <div className="text-center">
                            <img
                              src={data.strMealThumb}
                              className="rounded shadow"
                              style={{ maxWidth: "250px" }}
                            ></img>
                          </div>
                          <h3 className="text-decoration-underline">
                            Instructions:
                          </h3>
                          <p>{data.strInstructions}</p>
                          <a href={data.strYoutube} target="blank">
                            Watch Online
                          </a>
                        </div>
                        <div className="col-md-3">
                          <h1>Ingredients</h1>
                          <table className="table table-warning">
                            <thead>
                              <tr>
                                <th scope="col">Sl.No</th>
                                <th scope="col">Ingredients</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>

                                <td>{data.strIngredient1}</td>
                              </tr>
                              <tr>
                                <td>2</td>

                                <td>{data.strIngredient2}</td>
                              </tr>
                              <tr>
                                <td>3</td>

                                <td>{data.strIngredient3}</td>
                              </tr>
                              <tr>
                                <td>4</td>

                                <td>{data.strIngredient4}</td>
                              </tr>
                              <tr>
                                <td>5</td>

                                <td>{data.strIngredient5}</td>
                              </tr>
                              <tr>
                                <td>6</td>

                                <td>{data.strIngredient6}</td>
                              </tr>
                              <tr>
                                <td>7</td>

                                <td>{data.strIngredient7}</td>
                              </tr>
                              <tr>
                                <td>8</td>

                                <td>{data.strIngredient8}</td>
                              </tr>
                              <tr>
                                <td>9</td>

                                <td>{data.strIngredient9}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}</> }
    </>
  );
};

export default MealsCard;
