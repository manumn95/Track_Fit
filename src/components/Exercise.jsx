const Exercise = () => {
  return (
    <>
      <div className="card mt-3">
        <div className="card-body gradient rounded shadow">
          <div
            className="d-flex justify-content-end gap-3"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-pencil-fill"></i>
            <i className="bi bi-trash-fill"></i>
          </div>
          <div>
            <h4 className="text-center ">Cycling</h4>
            <ul style={{ listStyle: "none" }} className="p-1 fs-5">
              <li className=" gradient">
                Date:&nbsp;<span className="text-white "></span>
              </li>
              <li className=" gradient">
                Duration:&nbsp;<span className="text-white "></span>
              </li>
              <li className=" gradient">
                Sets:&nbsp;<span className="text-white "></span>
              </li>
              <li className=" gradient">
                Steps:&nbsp;<span className="text-white "></span>
              </li>
              <li className=" gradient">
                Calories Burned:&nbsp;
                <span className="text-white "></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exercise;
