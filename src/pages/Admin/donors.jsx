import { useState } from "react";
import Input from "../../components/Elements/Input";
import Select from "../../components/Elements/Select";
import TableBodyDonors from "../../components/Fragments/Admin/Dashboard/TableBodyDonors";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";
import { GetFaculty } from "../../services/Faculty.service";
import {
  DeleteDonor,
  GetDonor,
  PostDonor,
  PutDonor,
  getDonorById,
} from "../../services/Donor.service";
import ModalForm from "../../components/Elements/Modal";
import { useMutation } from "@tanstack/react-query";
import FormSelect from "../../components/Elements/FormSelect";
import { GetUsers } from "../../services/Users.service";
import ToastNotification from "../../components/Elements/ToastNotification";
import { GetSchedule } from "../../services/Schedule.service";
import moment from "moment";

const DonorPage = () => {
  const [seacrhName, setSearchName] = useState("");
  const [user, setUser] = useState("");
  const [page, setPage] = useState(1);
  const [selectedFaculty, setSelectedFaculty] = useState("all");

  const [errorUser, setErrorUser] = useState(false);
  const [messageUser, setMessageUser] = useState("");

  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [toast, setToast] = useState(false);
  const [statusToast, setStatusToast] = useState("");
  const [messageToast, setMessageToast] = useState("");

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [faculty, setFaculty] = useState("");
  const [donorDate, setDonorDate] = useState("");
  
  const {
    data: resDonor,
    isPending: isPendingDonor,
    refetch,
  } = GetDonor({
    name: seacrhName.toUpperCase() || "all",
    faculty: selectedFaculty,
    page: page,
    limit: 5,
  });

  const { mutate: mutatePostDonor } = useMutation({
    mutationFn: PostDonor,
  });

  const { mutate: mutatePutDonor } = useMutation({
    mutationFn: PutDonor,
  });

  const { mutate: mutateDeleteDonor } = useMutation({
    mutationFn: DeleteDonor,
  });

  const { data: resUsers } = GetUsers({
    name: "all",
    faculty: "all",
    role: "all",
    page: 1,
    limit: 999999,
  });

  const { data: resFaculty } = GetFaculty({
    name: "all",
    page: 1,
    limit: 9999,
  });

  const { data: resLastSchedule } = GetSchedule({
    faculty: "all",
    page: 1,
    limit: 1,
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

  const handleShowAdd = () => {
    setUser("");
    setOpenModalAdd(true);
  };

  const handleAdd = () => {
    if (user == "") {
      setErrorUser(true);
      setMessageUser("User is required");
    } else {
      setErrorUser(false);
    }

    if (user != "") {
      mutatePostDonor(
        {
          idUser: user,
          idSchedule: resLastSchedule?.data[0]?.id,
          isRegister: true,
          isDonor: false,
        },
        {
          onSuccess: () => {
            setOpenModalAdd(false);
            setToast(true);
            refetch();
            setStatusToast("success");
            setMessageToast("Add donor success!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
          onError: () => {
            setOpenModalAdd(false);
            setToast(true);
            refetch();
            setStatusToast("error");
            setMessageToast("Add donor failed!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
        }
      );
    }
  };

  const handleShowDelete = (id) => {
    getDonorById(id).then((res) => {
      setId(res?.data?.id);
      setName(res?.data?.user?.name);
      setFaculty(res?.data?.schedule?.faculty?.name);
      setDonorDate(
        moment(new Date(res?.data?.schedule?.closed)).format("DD MMMM YYYY")
      );
    });
    setOpenModalDelete(true);
  };

  const handleDelete = () => {
    mutateDeleteDonor(
      {
        id: id,
      },
      {
        onSuccess: () => {
          setOpenModalDelete(false);
          setToast(true);
          refetch();
          setStatusToast("success");
          setMessageToast("Delete pendonor success!");
          setTimeout(() => {
            setToast(false);
          }, 5000);
        },
        onError: () => {
          setOpenModalDelete(false);
          setToast(true);
          refetch();
          setStatusToast("error");
          setMessageToast("Delete pendonor failed!");
          setTimeout(() => {
            setToast(false);
          }, 5000);
        },
      }
    );
  };

  const handleDonor = (props) => {
    mutatePutDonor(
      {
        id: props.id,
        idUser: props.idUser,
        idSchedule: props.idSchedule,
        isDonor: !props.isDonor,
      },
      {
        onSuccess: () => {
          refetch();
        },
        onError: () => {
          refetch();
        },
      }
    );
  };

  const filterSeacrh = () => {
    return (
      <>
        <Input
          placeholder="Seacrh Name"
          className="w-full md:w-56 md:py-2.5 md:px-3"
          type="text"
          onChange={(e) => setSearchName(e.target.value)}
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

  const formModal = () => {
    return (
      <>
        <FormSelect
          label="User"
          data={resUsers?.data}
          name="faculty"
          placeholder="Select Faculty"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          error={errorUser}
          message={messageUser}
        />
      </>
    );
  };

  return (
    <DashboardLayout title="Data Donor">
      {toast && (
        <ToastNotification status={statusToast} message={messageToast} />
      )}
      <TableLayout
        coloumns={coloumns}
        filter={filterSeacrh()}
        page={page}
        setPage={setPage}
        pageCount={resDonor?.totalPage}
        rows={resDonor?.rows}
        rowsPage={resDonor?.rowsPage}
        totalRows={resDonor?.totalRows}
        handleShowAdd={handleShowAdd}
      >
        <TableBodyDonors
          res={resDonor}
          isPending={isPendingDonor}
          handleShowDelete={handleShowDelete}
          onChange={handleDonor}
        />
      </TableLayout>
      <ModalForm
        open={openModalAdd}
        setOpen={setOpenModalAdd}
        title="Add Donor"
        onClick={handleAdd}
        textButton="Submit"
        colorButton="blue"
      >
        <div className="w-full">{formModal()}</div>
      </ModalForm>
      <ModalForm
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        title="Delete Donor"
        onClick={handleDelete}
        textButton="Delete"
        colorButton="red"
      >
        <div className="w-full">
          <p className="font-semibold text-center">
            Apakah anda yakin ingin menghapus
          </p>
          <p className="font-bold text-center">{name}</p>
          <p className="font-semibold text-center">
            sebagai pendonor di {faculty} pada
          </p>
          <p className="font-semibold text-center">{donorDate}?</p>
        </div>
      </ModalForm>
    </DashboardLayout>
  );
};

export default DonorPage;
