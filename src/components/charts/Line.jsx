import { LineChart } from "@mui/x-charts/LineChart";
const Line = () => {
  return (
    <>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        max-width={400}
        height={250}
      />
    </>
  );
};

export default Line;
