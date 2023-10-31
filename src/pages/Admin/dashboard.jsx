import DashboardLayout from "../../components/Layout/DashboardLayout";
import {
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import {
  MdHomeWork,
  MdOutlineHealing,
  MdPeople,
  MdSchedule,
} from "react-icons/md";
import { GetFaculty } from "../../services/Faculty.service";
import { GetUsers } from "../../services/Users.service";
import { GetSchedule } from "../../services/Schedule.service";
import { GetDonor, getDonorByMonthYear } from "../../services/Donor.service";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [jan, setJan] = useState({});
  const [feb, setFeb] = useState({});
  const [mar, setMar] = useState({});
  const [apr, setApr] = useState({});
  const [may, setMay] = useState({});
  const [jun, setJun] = useState({});
  const [jul, setJul] = useState({});
  const [aug, setAug] = useState({});
  const [sep, setSep] = useState({});
  const [okt, setOkt] = useState({});
  const [nov, setNov] = useState({});
  const [des, setDes] = useState({});
  const [resSchedule, setResSchedule] = useState({});

  useEffect(() => {
    getDonorByMonthYear({ month: "1", year: new Date().getFullYear() }).then(
      (res) => setJan(res)
    );
    getDonorByMonthYear({ month: "2", year: new Date().getFullYear() }).then(
      (res) => setFeb(res)
    );
    getDonorByMonthYear({ month: "3", year: new Date().getFullYear() }).then(
      (res) => setMar(res)
    );
    getDonorByMonthYear({ month: "4", year: new Date().getFullYear() }).then(
      (res) => setApr(res)
    );
    getDonorByMonthYear({ month: "5", year: new Date().getFullYear() }).then(
      (res) => setMay(res)
    );
    getDonorByMonthYear({ month: "6", year: new Date().getFullYear() }).then(
      (res) => setJun(res)
    );
    getDonorByMonthYear({ month: "7", year: new Date().getFullYear() }).then(
      (res) => setJul(res)
    );
    getDonorByMonthYear({ month: "8", year: new Date().getFullYear() }).then(
      (res) => setAug(res)
    );
    getDonorByMonthYear({ month: "9", year: new Date().getFullYear() }).then(
      (res) => setSep(res)
    );
    getDonorByMonthYear({ month: "10", year: new Date().getFullYear() }).then(
      (res) => setOkt(res)
    );
    getDonorByMonthYear({ month: "11", year: new Date().getFullYear() }).then(
      (res) => setNov(res)
    );
    getDonorByMonthYear({ month: "12", year: new Date().getFullYear() }).then(
      (res) => setDes(res)
    );
  }, []);

  const { data: resFaculty } = GetFaculty({
    name: "all",
    page: 1,
    limit: 999999,
  });

  const { data: resUsers } = GetUsers({
    name: "all",
    faculty: "all",
    role: "all",
    page: 1,
    limit: 999999,
  });

  const { data: resDonor } = GetDonor({
    name: "all",
    faculty: "all",
    page: 1,
    limit: 999999,
  });

  useEffect(() => {
    GetSchedule({ faculty: "all", page: 1, limit: 999999 }).then((res) =>
      setResSchedule(res)
    );
  }, []);

  console.log(resSchedule);

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
        label: `Data Pendonor ${new Date().getFullYear()}`,
        data: [
          jan?.data?.length,
          feb?.data?.length,
          mar?.data?.length,
          apr?.data?.length,
          may?.data?.length,
          jun?.data?.length,
          jul?.data?.length,
          aug?.data?.length,
          sep?.data?.length,
          okt?.data?.length,
          nov?.data?.length,
          des?.data?.length,
        ],
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

  const isDonorTrue = resDonor?.data?.filter(function (item) {
    return item.isDonor == true;
  });

  return (
    <DashboardLayout title="Dashboard">
      <div className="grid gap-4 justify-center md:justify-normal mb-20 md:mb-0">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white h-fit rounded-xl shadow-xl p-4 flex flex-col justify-center items-center gap-4">
            <h2 className="text-lg font-semibold">Data Faculty</h2>
            <MdHomeWork size={40} className="text-green-600" />
            <h2 className="text-2xl font-semibold">
              {resFaculty?.data?.length} Units
            </h2>
          </div>
          <div className="bg-white h-fit rounded-xl shadow-xl p-4 flex flex-col justify-center items-center gap-4">
            <h2 className="text-lg font-semibold">Data Users</h2>
            <MdPeople size={40} className="text-blue-600" />
            <h2 className="text-2xl font-semibold">
              {resUsers?.data?.length} Person
            </h2>
          </div>
          <div className="bg-white h-fit rounded-xl shadow-xl p-4 flex flex-col justify-center items-center gap-4">
            <h2 className="text-lg font-semibold">Data Schedule</h2>
            <MdSchedule size={40} className="text-yellow-600" />
            <h2 className="text-2xl font-semibold">1 Schedule</h2>
          </div>
          <div className="bg-white h-fit rounded-xl shadow-xl p-4 flex flex-col justify-center items-center gap-4">
            <h2 className="text-lg font-semibold">Data Pendonor</h2>
            <MdOutlineHealing size={40} className="text-red-600" />
            <h2 className="text-2xl font-semibold">
              {isDonorTrue?.length > 0 ? isDonorTrue?.length : 0} Pendonor
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-1 gap-4">
          <div className="bg-white h-fit md:h-[350px] w-72 md:w-full rounded-xl shadow-xl flex justify-center items-center p-4 md:p-10 flex-col">
            <h2 className="font-semibold text-lg">
              Data Pendonor {new Date().getFullYear()}
            </h2>
            <div className="w-full h-full flex justify-center">
              <Bar data={dataBar} options={configBar}></Bar>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
