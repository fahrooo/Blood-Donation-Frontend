import { useState } from "react";
import Input from "../../components/Elements/Input";
import Select from "../../components/Elements/Select";
import TableBodyUsers from "../../components/Fragments/Admin/Dashboard/TableBodyUsers";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";

const UsersPage = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");

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
      role: "Admin",
    },
    {
      id: 2,
      name: "Jhon Doe",
      gender: "Male",
      faculty: "Fakultas Pertanian",
      email: "jhondoe@gmail.com",
      phone: 85124835096,
      role: "Mahasiswa",
    },
    {
      id: 3,
      name: "Bambang Pamungkas",
      gender: "Male",
      faculty: "-",
      email: "bambangpamungkas@gmail.com",
      phone: 85122235556,
      role: "Masyarakat",
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

  const dataRole = [
    {
      id: 1,
      name: "Admin",
    },
    {
      id: 2,
      name: "Dosen",
    },
    {
      id: 3,
      name: "Staff",
    },
    {
      id: 4,
      name: "Mahasiswa",
    },
    {
      id: 5,
      name: "Masyarakat",
    },
  ];

  const filterSeacrh = () => {
    return (
      <>
        <Input placeholder="Search Name" />
        <Select
          placeholder="All Faculties"
          data={dataFaculty}
          selected={selectedFaculty}
          setSelected={setSelectedFaculty}
          className="w-full py-1.5"
          width="w-full md:w-60"
        />
        <Select
          placeholder="Select Role"
          data={dataRole}
          selected={selectedRole}
          setSelected={setSelectedRole}
          className="w-full py-1.5"
          width="w-full md:w-60"
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
