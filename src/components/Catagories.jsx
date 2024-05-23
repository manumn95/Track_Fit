import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";

const Catogories = () => {
  const [catagory, setCatagory] = useState([]);

  useEffect(() => {
    fetchCatagory();
  }, []);

  const fetchCatagory = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCatagory(response.data.categories);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center fw-bold gradient-text shadow mt-3 fixed">
          CATEGORIES
        </h1>

        <div>
          {!catagory.length ? (
            <ShimmerCard></ShimmerCard>
          ) : (
            <div className="row">
              {catagory.map((data, index) => {
                return (
                  <div key={index} className="col-md-4 mt-5 ">
                    <Link
                      to={`/landing/recipes/${data.strCategory}`}
                      className="card shadow"
                    >
                      <div className="card-body">
                        <h2>{data.strCategory}</h2>
                        <img
                          src={data.strCategoryThumb}
                          style={{ width: "100%" }}
                        ></img>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Catogories;
