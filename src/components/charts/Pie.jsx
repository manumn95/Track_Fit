import { PieChart } from "@mui/x-charts/PieChart";

const Pie = ({ workoutdata }) => {
  const pieData = workoutdata.map((data, i) => ({
    id: i,
    value: data.caloriesBurned,
    label: data.exerciseName,
  }));

  return (
    <>
      <PieChart
        series={[
          {
            data: pieData,
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
          },
        ]}
        max-width={400}
        height={200}
      />
    </>
  );
};

export default Pie;
