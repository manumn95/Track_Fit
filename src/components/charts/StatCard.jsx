import "../../../src/App.css";
const StatCard = ({ title, value, icon }) => {
  return (
    <>
      <div className="col-md-4 ">
        <div className="card text-center ">
          <div className="card-body gradient d-flex gap-2">
            <i className={icon}></i>
            <div>
              <h5 className="card-title">{title}</h5>
              <h3>{value}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatCard;
