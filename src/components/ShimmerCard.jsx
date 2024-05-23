const ShimmerCard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {Array.from({ length: 10 }).map((ele, i) => {
            return (
              <div key={i} className="col-md-4 mb-5 mt-5">
                <div className="card">
                  <div
                    className="card-body shadow rounded "
                    style={{ height: "250px", backgroundColor: "#ccc" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShimmerCard;
