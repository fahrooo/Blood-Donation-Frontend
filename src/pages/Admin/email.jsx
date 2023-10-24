import Select from "../../components/Elements/Select";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";
import { useState } from "react";
import Input from "../../components/Elements/Input";
import TableBodyEmail from "../../components/Fragments/Admin/Dashboard/TableBodyEmail";
import { GetFaculty } from "../../services/Faculty.service";
import { GetEmail } from "../../services/Email.service";

const EmailPage = () => {
  const [subject, setSubject] = useState("");
  const [page, setPage] = useState(1);
  const [selectedFaculty, setSelectedFaculty] = useState("all");

  const { data: resEmail, isPending: isPendingEmail } = GetEmail({
    subject: subject.toUpperCase() || "all",
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
      name: "Subject",
    },
    {
      name: "Message",
    },
    {
      name: "Action",
    },
  ];

  const filterSeacrh = () => {
    return (
      <>
        <Input
          placeholder="Seacrh Subject"
          className="w-full md:w-56 md:py-2.5 md:px-3"
          type="text"
          onChange={(e) => setSubject(e.target.value)}
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
    <DashboardLayout title="Data Email">
      <TableLayout
        coloumns={coloumns}
        filter={filterSeacrh()}
        page={page}
        setPage={setPage}
        pageCount={resEmail?.totalPage}
      >
        <TableBodyEmail res={resEmail} isPending={isPendingEmail} />
      </TableLayout>
    </DashboardLayout>
  );
};

export default EmailPage;
