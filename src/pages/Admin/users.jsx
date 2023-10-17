import { useState } from "react";
import Input from "../../components/Elements/Input";
import Select from "../../components/Elements/Select";
import TableBodyUsers from "../../components/Fragments/Admin/Dashboard/TableBodyUsers";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";

const UsersPage = () => {
  const [selected, setSelected] = useState(0);

  const coloumns = [
    {
      name: "Name",
    },
    {
      name: "Gender",
    },
    {
      name: "Faculty",
    },
    {
      name: "Email",
    },
    {
      name: "Phone",
    },
    {
      name: "Role",
    },
    {
      name: "Action",
    },
  ];

  const data = [
    {
      id: 1,
      name: "Cindi Maelani Putri",
      gender: "Female",
      faculty: "Fakultas Ilmu Kesehatan",
      email: "cindimputrii@gmail.com",
      phone: 85703328754,
      role: "Mahasiswa",
    },
    {
      id: 2,
      name: "Fahro Nur FAuzi",
      gender: "Male",
      faculty: "-",
      email: "fahronurf@gmail.com",
      phone: 85322448008,
      role: "Masyarakat"
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
    <DashboardLayout title="Data Users">
      <TableLayout coloumns={coloumns} filter={filterSeacrh()}>
        <TableBodyUsers data={data} />
      </TableLayout>
    </DashboardLayout>
  );
};

export default UsersPage;
