import Select from "../../components/Elements/Select";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";
import { useState } from "react";
import Input from "../../components/Elements/Input";
import TableBodyEmail from "../../components/Fragments/Admin/Dashboard/TableBodyEmail";

const EmailPage = () => {
  const [selected, setSelected] = useState(0);

  const coloumns = [
    {
      name: "Faculty",
    },
    {
      name: "Subject",
    },
    {
      name: "Message",
    },
    {
      name: "Action",
    },
  ];

  const data = [
    {
      id: 1,
      faculty: "Fakultas Ilmu Kesehatan",
      subject: "Pemberitahuan Donor Darah",
      message: `Dear Mahasiswa, I would like to take a moment to introduce myself and my company. My name is Paris and I am a Drafter at PT. Gas Indo. Our company provides customers with cutting-edge technology for all their email signature needs.`,
    },
    {
      id: 1,
      faculty: "Fakultas Ilmu Kesehatan",
      subject: "Pemberitahuan Donor Darah",
      message: `Dear Mahasiswa, I would like to take a moment to introduce myself and my company. My name is Paris and I am a Drafter at PT. Gas Indo. Our company provides customers with cutting-edge technology for all their email signature needs.`,
    },
    {
      id: 1,
      faculty: "Fakultas Ilmu Kesehatan",
      subject: "Pemberitahuan Donor Darah",
      message: `Dear Mahasiswa, I would like to take a moment to introduce myself and my company. My name is Paris and I am a Drafter at PT. Gas Indo. Our company provides customers with cutting-edge technology for all their email signature needs.`,
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
        <Input placeholder="Search Subject" />
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
    <DashboardLayout title="Data Email">
      <TableLayout coloumns={coloumns} filter={filterSeacrh()}>
        <TableBodyEmail data={data} />
      </TableLayout>
    </DashboardLayout>
  );
};

export default EmailPage;
