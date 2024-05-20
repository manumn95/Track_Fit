import "../../src/App.css";
const Modal = ({ target }) => {
  return (
    <>
      <div
        className="modal fade"
        id={target}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className=" container mt-2 d-flex justify-content-end ">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <h1
              className="text-black fw-bold fs-3 text-center"
              id="exampleModalLabel"
            >
              Login
            </h1>
            <div className="modal-body">
              <div className="container">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    ></input>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                  <p className="text-center text-secondary mt-2">
                    Register here..&nbsp;
                    <a href="">Sign Up</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
