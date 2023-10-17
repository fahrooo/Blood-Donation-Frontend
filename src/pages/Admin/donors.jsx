import { useState } from "react";
import Input from "../../components/Elements/Input";
import Select from "../../components/Elements/Select";
import TableBodyDonors from "../../components/Fragments/Admin/Dashboard/TableBodyDonors";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";

const DonorsPage = () => {
  const [selected, setSelected] = useState(0);

  const coloumns = [
    {
      name: "Name",
    },
    {
      name: "Faculty",
    },
    {
      name: "Donor Date",
    },
    {
      name: "Donor?",
    },
    {
      name: "Action",
    },
  ];

  const data = [
    {
      id: 1,
      name: "Cindi Maelani Putri",
      faculty: "Fakultas Ilmu Kesehatan",
      donorDate: "23-10-2023",
      isDonor: true,
    },
  ];

  const dataFaculty = [
    {
      id: 1,
      name: "Fakultas Ilmu Kesehatan",
    },
    {
      id: 2,
      name: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
    },
    {
      id: 3,
      name: "Fakultas Ilmu Politik",
    },
    {
      id: 4,
      name: "Fakultas Kedokteran",
    },
    {
      id: 5,
      name: "Fakultas Pertanian",
    },
  ];

  const filterSeacrh = () => {
    return (
      <>
        <Input placeholder="Search NIM" />
        <Input placeholder="Search Name" />
        <Select
          placeholder="All Faculties"
          data={dataFaculty}
          selected={selected}
          setSelected={setSelected}
          className="w-full py-1.5"
          width="w-60"
        />
      </>
    );
  };

  return (
    <DashboardLayout title="Data Donors">
      <TableLayout coloumns={coloumns} filter={filterSeacrh()}>
        <TableBodyDonors data={data} />
      </TableLayout>
    </DashboardLayout>
  );
};

export default DonorsPage;
