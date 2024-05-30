import { deleteWorkout } from "../api";

const Exercise = ({
  exerciseName,
  date,
  duration,
  sets,
  steps,
  caloriesBurned,
  id,
  setCounter,
  counter,
  setUpdateId,
  setDataById,
  setShow,
  setIsupdate,
}) => {
  const token = localStorage.getItem("track-fit-token");
  const handleDelete = async () => {
    const response = await deleteWorkout(id, token);
    if (response) {
      setCounter(counter - 1);
    }
  };

  const handleUpdate = async () => {
    setUpdateId(id);

    setDataById({ exerciseName, date, duration, sets, steps, caloriesBurned });
    setShow(true);
    setIsupdate(true);
  };

  return (
    <>
      <div className="card mt-3">
        <div className="card-body gradient rounded shadow">
          <div
            className="d-flex justify-content-end gap-3"
            style={{ cursor: "pointer" }}
          >
            <button
              type="button"
              className="btn"
              value={id}
              onClick={handleUpdate}
            >
              <i className="bi bi-pencil-fill"></i>
            </button>
            <button
              type="button"
              className="btn"
              value={id}
              onClick={handleDelete}
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
          <div>
            <h4 className="text-center ">{exerciseName}</h4>
            <ul style={{ listStyle: "none" }} className="p-1 fs-5">
              <li className=" gradient">
                Date:&nbsp;<span className="text-white ">{date}</span>
              </li>
              <li className=" gradient">
                Duration:&nbsp;<span className="text-white ">{duration}</span>
              </li>
              <li className=" gradient">
                Sets:&nbsp;<span className="text-white ">{sets}</span>
              </li>
              <li className=" gradient">
                Steps:&nbsp;<span className="text-white ">{steps}</span>
              </li>
              <li className=" gradient">
                Calories Burned:&nbsp;
                <span className="text-white ">{caloriesBurned}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exercise;
