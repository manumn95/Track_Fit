import { PieChart } from "@mui/x-charts/PieChart";
const Pie = () => {
  return (
    <>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Walking" },
              { id: 1, value: 15, label: "Running" },
              { id: 2, value: 20, label: "Squats" },
            ],
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
