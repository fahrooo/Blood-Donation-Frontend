import { useState } from "react";
import Select from "../../components/Elements/Select";
import TableBodySchedule from "../../components/Fragments/Admin/Dashboard/TableBodySchedule";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";
import { GetFaculty } from "../../services/Faculty.service";
import { GetSchedule } from "../../services/Schedule.service";

const SchedulePage = () => {
  const [page, setPage] = useState(1);
  const [selectedFaculty, setSelectedFaculty] = useState("all");

  const { data: resSchedule, isPending: isPendingSchedule } = GetSchedule({
    faculty: selectedFaculty,
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

  const filterSeacrh = () => {
    return (
      <>
        <Select
          placeholder="All Faculties"
          data={resFaculty?.data}
          selected={selectedFaculty}
          setSelected={setSelectedFaculty}
          className="w-full py-1.5 md:py-2.5"
          width="w-full md:w-60"
        />
      </>
    );
  };

  return (
    <DashboardLayout title="Data Schedule">
      <TableLayout
        coloumns={coloumns}
        filter={filterSeacrh()}
        page={page}
        setPage={setPage}
        pageCount={resSchedule?.totalPage}
      >
        <TableBodySchedule res={resSchedule} isPending={isPendingSchedule} />
      </TableLayout>
    </DashboardLayout>
  );
};

export default SchedulePage;
