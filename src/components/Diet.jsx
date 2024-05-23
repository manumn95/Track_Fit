import image from "../assets/images/diet.png";
import calories from "../assets/images/calories.png";
import { useNavigate } from "react-router-dom";
const Diet = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="gradient text-center fw-bold rounded shadow d-flex gap-3">
              <img src={calories} style={{ width: "80px" }}></img>
              <p className=" d-flex justify-content-center align-items-center">
                Eat Up to 1250 kcal
              </p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diet;
