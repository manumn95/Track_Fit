import "../../src/App.css";
import workout from "../assets/images/workout.jpg";
import card1 from "../assets/images/card1.jpg";
import card2 from "../assets/images/card2.jpg";
import card3 from "../assets/images/card3.jpg";
import card4 from "../assets/images/card4.jpg";
import card5 from "../assets/images/card5.jpg";
import card6 from "../assets/images/card6.jpg";
const Template = () => {
  return (
    <>
      <div className=" container mt-5">
        <div className="row">
          <div className="col-md-7 ">
            <div className="container p-5 bg-muted border shadow-lg">
              <h1 className=" display-4 text  fw-bolder gradient-text">
                Your body can stand almost anything. It’s your mind that you
                have to convince.
              </h1>
            </div>
          </div>
          <div className="col-md-5 mb-1">
            <img style={{ width: "100%", height: "100%" }} src={workout}></img>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="container border rounded shadow">
          <div className="row mt-4">
            <div className="col-12 ms-2 mb-3">
              <div className="row">
                <div className="col-md-2  ">
                  <img
                    className="rounded mt-3"
                    src={card1}
                    style={{ width: "100%" }}
                  ></img>
                </div>
                <div className="col-md-2  ">
                  <img
                    className="rounded mt-3"
                    src={card2}
                    style={{ width: "100%" }}
                  ></img>
                </div>
                <div className="col-md-2  ">
                  <img
                    className="rounded mt-3"
                    src={card3}
                    style={{ width: "100%" }}
                  ></img>
                </div>
                <div className="col-md-2  ">
                  <img
                    className="rounded mt-3"
                    src={card4}
                    style={{ width: "100%" }}
                  ></img>
                </div>
                <div className="col-md-2  ">
                  <img
                    className="rounded mt-3"
                    src={card5}
                    style={{ width: "100%" }}
                  ></img>
                </div>
                <div className="col-md-2  ">
                  <img
                    className="rounded mt-3"
                    src={card6}
                    style={{ width: "100%" }}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
