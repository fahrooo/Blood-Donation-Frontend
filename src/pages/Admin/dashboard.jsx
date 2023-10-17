import DashboardLayout from "../../components/Layout/DashboardLayout";
import {
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import { MdHomeWork, MdOutlineHealing, MdPeople, MdSchedule } from "react-icons/md";

const DashboardPage = () => {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  const dataBar = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Data Pendonor 2023",
        data: [65, 59, 80, 81, 56, 55, 40, 60, 20, 30, 23, 42],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataPie = {
    labels: ["FMIPA", "FMIPA", "FISIP", "FKIK", "FT", "FH"],
    datasets: [
      {
        label: "Jumlah Pendonor",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const configBar = {
    type: "bar",
    data: dataBar,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const configPie = {
    type: "bar",
    data: dataPie,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <DashboardLayout title="Dashboard">
      <div className="grid gap-4 justify-center md:justify-normal mb-20 md:mb-0">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white h-fit rounded-xl shadow-xl p-4 flex flex-col justify-center items-center gap-4">
            <h2 className="text-lg font-semibold">Data Faculty</h2>
            <MdHomeWork size={40} className="text-green-600" />
            <h2 className="text-2xl font-semibold">56 Units</h2>
          </div>
          <div className="bg-white h-fit rounded-xl shadow-xl p-4 flex flex-col justify-center items-center gap-4">
            <h2 className="text-lg font-semibold">Data Users</h2>
            <MdPeople size={40} className="text-blue-600" />
            <h2 className="text-2xl font-semibold">100 Person</h2>
          </div>
          <div className="bg-white h-fit rounded-xl shadow-xl p-4 flex flex-col justify-center items-center gap-4">
            <h2 className="text-lg font-semibold">Data Schedule</h2>
            <MdSchedule size={40} className="text-yellow-600" />
            <h2 className="text-2xl font-semibold">20 Schedule</h2>
          </div>
          <div className="bg-white h-fit rounded-xl shadow-xl p-4 flex flex-col justify-center items-center gap-4">
            <h2 className="text-lg font-semibold">Data Pendonor</h2>
            <MdOutlineHealing size={40} className="text-red-600" />
            <h2 className="text-2xl font-semibold">70 Pendonor</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white h-fit md:h-[350px] w-72 md:w-full rounded-xl shadow-xl flex justify-center items-center p-4 md:p-10 flex-col">
            <h2 className="font-semibold text-lg">Data Pendonor 2023</h2>
            <Bar data={dataBar} options={configBar}></Bar>
          </div>
          <div className="bg-white h-fit md:h-[350px] w-72 md:w-full rounded-xl shadow-xl flex justify-center items-center p-4 md:p-10 flex-col">
            <h2 className="font-semibold text-lg">
              Data Pendonor Faculty 2023
            </h2>
            <div className="h-fit">
              <Pie data={dataPie} options={configPie}></Pie>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
