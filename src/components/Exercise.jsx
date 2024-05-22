const Exercise = () => {
  return (
    <>
      <div className="card mt-5">
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
            <ul>
              <li>
                Date:
                <input
                  type="text"
                  className="text-white"
                  style={{ background: "transparent", border: "none" }}
                  readOnly
                ></input>
              </li>
              <li>
                Duration:
                <input
                  type="text"
                  className="text-white"
                  style={{ background: "transparent", border: "none" }}
                  readOnly
                ></input>
              </li>
              <li>
                Sets:
                <input
                  type="text"
                  className="text-white"
                  style={{ background: "transparent", border: "none" }}
                  readOnly
                ></input>
              </li>
              <li>
                Calories Burned:
                <input
                  type="text"
                  className="text-white"
                  style={{ background: "transparent", border: "none" }}
                  readOnly
                ></input>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exercise;
