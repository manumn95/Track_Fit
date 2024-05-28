import { useState, useEffect } from "react";

const Exercise = ({
  exerciseName,
  date,
  duration,
  sets,
  steps,
  caloriesBurned,
}) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const formatDate = (date) => {
      const dd = new Date(date);
      const day = dd.getUTCDate();
      const month = dd.getUTCMonth() + 1;
      const year = dd.getUTCFullYear();
      const formattedDay = day.toString().padStart(2, "0");
      const formattedMonth = month.toString().padStart(2, "0");
      const formattedYear = year.toString().slice(2);
      return `${formattedDay}/${formattedMonth}/${formattedYear}`;
    };

    setFormattedDate(formatDate(date));
  }, [date]);
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
            <h4 className="text-center ">{exerciseName}</h4>
            <ul style={{ listStyle: "none" }} className="p-1 fs-5">
              <li className=" gradient">
                Date:&nbsp;<span className="text-white ">{formattedDate}</span>
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
