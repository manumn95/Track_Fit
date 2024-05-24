import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
const MealPlannerModal = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton onClick={handleClose}></Modal.Header>
        <Modal.Body>
          <form className="form">
            <div className="mb-3">
              <label className="form-label">Dish Name</label>
              <input className="form-control"></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Calories</label>
              <input type="number" className="form-control"></input>
            </div>
            <div className="d-flex gap-1">
              <button className="rounded btn-success">Add-Breakfast</button>
              <button className="rounded btn-success">Add-Lunch</button>
              <button className="rounded btn-success">Add-Evening-Snaks</button>
              <button className="rounded btn-success">Add-Dinner</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MealPlannerModal;
