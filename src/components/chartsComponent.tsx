import { Card } from "@material-tailwind/react";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { SideBar } from "../common/sideBar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const ChartsComponent: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const AllCasesWorld = useSelector(
    (state: any) => state?.getAllCasesreducer?.AllCasesWorld
  );
  let lineData = Object.keys(AllCasesWorld?.cases).map((key) => {return AllCasesWorld?.cases[key]});
  console.log(lineData)
  const labels = Object.keys(AllCasesWorld?.cases).map((key) => {return key});
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Covid cases',
      },
    },
  };
   const data = {
    labels,
    datasets: [
      {
        label: 'Covid cases count',
        data: lineData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  return (
    <div>
      <Card className="mt-6 w-96 float-left">
        <SideBar />
      </Card>
      <Card className="mt-6 float-left">
        <header>Contact</header>
        <div className="lineChartContainer" >
        <Line options={options} data={data} height="500" width={"500"}/>;
    </div>
      </Card>
    </div>
  );
};
export default ChartsComponent;
