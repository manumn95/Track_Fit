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
            <i className="bi bi-floppy"></i>
          </div>
          <div>
            <h4 className="text-center ">Cycling</h4>
            <ul className="list-group ">
              <li className="list-group-item gradient">
                Date:&nbsp;<span className="text-white ">ji</span>
              </li>
              <li className="list-group-item gradient">
                Duration:&nbsp;<span className="text-white ">ji</span>
              </li>
              <li className="list-group-item gradient">
                Sets:&nbsp;<span className="text-white ">ji</span>
              </li>
              <li className="list-group-item gradient">
                Calories Burned:&nbsp;
                <span className="text-white ">ji</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exercise;
