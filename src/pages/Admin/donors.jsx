import { useState } from "react";
import Input from "../../components/Elements/Input";
import Select from "../../components/Elements/Select";
import TableBodyDonors from "../../components/Fragments/Admin/Dashboard/TableBodyDonors";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";
import { GetFaculty } from "../../services/Faculty.service";
import { GetDonor } from "../../services/Donor.service";

const DonorPage = () => {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [selectedFaculty, setSelectedFaculty] = useState("all");

  const { data: resDonor, isPending: isPendingDonor } = GetDonor({
    name: name.toUpperCase() || "all",
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
      </>
    );
  };

  return (
    <DashboardLayout title="Data Donor">
      <TableLayout
        coloumns={coloumns}
        filter={filterSeacrh()}
        page={page}
        setPage={setPage}
        pageCount={resDonor?.totalPage}
      >
        <TableBodyDonors res={resDonor} isPending={isPendingDonor} />
      </TableLayout>
    </DashboardLayout>
  );
};

export default DonorPage;
