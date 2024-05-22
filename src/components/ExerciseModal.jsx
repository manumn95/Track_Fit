import { Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../src/App.css";
const ExerciseModal = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Exercise Name
              </label>
              <input type="text" className="form-control" id="name"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Date
              </label>
              <input type="date" className="form-control" id="date"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Duration
              </label>
              <input
                type="number"
                className="form-control"
                id="duration"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Sets
              </label>
              <input type="number" className="form-control" id="sets"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Calories Burned
              </label>
              <input
                type="number"
                className="form-control"
                id="calories"
              ></input>
            </div>

            <button type="button" className="btn gradient text-white border">
              Add Exercsie
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ExerciseModal;
