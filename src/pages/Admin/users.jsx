import { useState } from "react";
import Input from "../../components/Elements/Input";
import Select from "../../components/Elements/Select";
import TableBodyUsers from "../../components/Fragments/Admin/Dashboard/TableBodyUsers";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";
import { GetUsers } from "../../services/Users.service";
import { GetFaculty } from "../../services/Faculty.service";

const UsersPage = () => {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [selectedFaculty, setSelectedFaculty] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");

  const { data: resUsers, isPending: isPendingUsers } = GetUsers({
    name: name.toUpperCase() || "all",
    faculty: selectedFaculty,
    role: selectedRole,
    page: page,
    limit: 5,
  });

  const { data: resFaculty } = GetFaculty({
    name: "all",
    page: 1,
    limit: 9999,
  });

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

  const dataRole = [
    {
      id: 0,
      name: "Admin",
    },
    {
      id: 1,
      name: "Dosen",
    },
    {
      id: 2,
      name: "Staff",
    },
    {
      id: 3,
      name: "Mahasiswa",
    },
    {
      id: 4,
      name: "Masyarakat",
    },
  ];

  const filterSeacrh = () => {
    return (
      <>
        <Input
          placeholder="Seacrh Name"
          className="w-full md:w-56 md:py-2.5 md:px-3"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          placeholder="All Faculties"
          data={resFaculty?.data}
          selected={selectedFaculty}
          setSelected={setSelectedFaculty}
          className="w-full py-1.5 md:py-2.5"
          width="w-full md:w-60"
        />
        <Select
          placeholder="Select Role"
          data={dataRole}
          selected={selectedRole}
          setSelected={setSelectedRole}
          className="w-full py-1.5 md:py-2.5"
          width="w-full md:w-60"
        />
      </>
    );
  };

  return (
    <DashboardLayout title="Data Users">
      <TableLayout
        coloumns={coloumns}
        filter={filterSeacrh()}
        page={page}
        setPage={setPage}
        pageCount={resUsers?.totalPage}
      >
        <TableBodyUsers res={resUsers} isPending={isPendingUsers} />
      </TableLayout>
    </DashboardLayout>
  );
};

export default UsersPage;
