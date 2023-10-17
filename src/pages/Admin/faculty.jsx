import Input from "../../components/Elements/Input";
import TableBodyFaculty from "../../components/Fragments/Admin/Dashboard/TableBodyFaculty";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";

const FacultyPage = () => {
  const coloumns = [
    {
      name: "Faculty Name",
    },
    {
      name: "Action",
    },
  ];

  const data = [
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
  return (
    <DashboardLayout title="Data Faculty">
      <TableLayout
        coloumns={coloumns}
        filter={<Input placeholder="Search Name" />}
      >
        <TableBodyFaculty data={data} />
      </TableLayout>
    </DashboardLayout>
  );
};

export default FacultyPage;
