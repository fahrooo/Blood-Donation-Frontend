import { useState } from "react";
import Select from "../../components/Elements/Select";
import TableBodySchedule from "../../components/Fragments/Admin/Dashboard/TableBodySchedule";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";

const SchedulePage = () => {
  const [selected, setSelected] = useState(0);

  const coloumns = [
    {
      name: "Faculty",
    },
    {
      name: "Opening",
    },
    {
      name: "Closed",
    },
    {
      name: "Action",
    },
  ];

  const data = [
    {
      id: 1,
      faculty: "Fakultas Ilmu Kesehatan",
      opening: "10-10-2023",
      closed: "23-10-2023",
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
    <DashboardLayout title="Data Schedule">
      <TableLayout coloumns={coloumns} filter={filterSeacrh()}>
        <TableBodySchedule data={data} />
      </TableLayout>
    </DashboardLayout>
  );
};

export default SchedulePage;
