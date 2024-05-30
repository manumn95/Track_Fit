import { LineChart } from "@mui/x-charts/LineChart";

const Line = ({ workoutdata }) => {
  const xData = workoutdata.map((data) => data.duration);
  const yData = workoutdata.map((data) => data.steps);

  return (
    <>
      <LineChart
        xAxis={[
          {
            data: xData,
            label: "Duration(min)", // Set the x-axis label
          },
        ]}
        yAxis={[
          {
            label: "Steps", // Set the y-axis label
          },
        ]}
        series={[
          {
            data: yData,
            label: "Steps Over Time", // Optionally set a series label
          },
        ]}
        maxWidth={400}
        height={250}
      />
    </>
  );
};

export default Line;
