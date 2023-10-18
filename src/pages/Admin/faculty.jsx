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
      code: "FIK",
    },
    {
      id: 2,
      name: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
      code: "FMIPA",
    },
    {
      id: 3,
      name: "Fakultas Ilmu Soisal dan Ilmu Politik",
      code: "FISIP",
    },
    {
      id: 4,
      name: "Fakultas Kedokteran",
      code: "FK",
    },
    {
      id: 5,
      name: "Fakultas Pertanian",
      code: "FP",
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
