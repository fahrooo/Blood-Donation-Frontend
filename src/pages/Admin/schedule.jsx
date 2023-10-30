import { forwardRef, useEffect, useState } from "react";
import Select from "../../components/Elements/Select";
import TableBodySchedule from "../../components/Fragments/Admin/Dashboard/TableBodySchedule";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";
import { GetFaculty } from "../../services/Faculty.service";
import {
  DeleteSchedule,
  GetSchedule,
  PostSchedule,
  PutSchedule,
  getScheduleById,
} from "../../services/Schedule.service";
import ModalForm from "../../components/Elements/Modal";
import FormSelect from "../../components/Elements/FormSelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useMutation } from "@tanstack/react-query";
import ToastNotification from "../../components/Elements/ToastNotification";

const ButtonDatePicker = forwardRef(({ value, onClick }, ref) => (
  <button
    className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-1.5 px-3 md:py-2 border border-blue-600 hover:border-transparent rounded-lg w-full"
    onClick={onClick}
    ref={ref}
  >
    {moment(value).format("DD MMMM YYYY")}
  </button>
));

ButtonDatePicker.displayName = "ButtonDatePicker";

const SchedulePage = () => {
  const [page, setPage] = useState(1);
  const [selectedFaculty, setSelectedFaculty] = useState("all");

  const [id, setId] = useState("");
  const [faculty, setFaculty] = useState("");
  const [openingDate, setOpeningDate] = useState(new Date());
  const [closedDate, setClosedDate] = useState(new Date());

  const [errorFaculty, setErrorFaculty] = useState(false);

  const [messageFaculty, setMessageFaculty] = useState("");

  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [toast, setToast] = useState(false);
  const [statusToast, setStatusToast] = useState("");
  const [messageToast, setMessageToast] = useState("");

  const [disabled, setDisabled] = useState(false);

  const {
    data: resSchedule,
    isPending: isPendingSchedule,
    refetch,
  } = GetSchedule({
    faculty: selectedFaculty,
    page: page,
    limit: 5,
  });

  const { data: resLastSchedule, refetch: refacthLastSchedule } = GetSchedule({
    faculty: "all",
    page: 1,
    limit: 1,
  });

  useEffect(() => {
    if (
      Date.parse(new Date()) <
      Date.parse(new Date(resLastSchedule?.data[0]?.closed))
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [resLastSchedule?.data, refacthLastSchedule]);

  const { data: resFaculty } = GetFaculty({
    name: "all",
    page: 1,
    limit: 9999,
  });

  const { mutate: mutatePostSchedule } = useMutation({
    mutationFn: PostSchedule,
  });

  const { mutate: mutatePutSchedule } = useMutation({
    mutationFn: PutSchedule,
  });

  const { mutate: mutateDeleteSchedule } = useMutation({
    mutationFn: DeleteSchedule,
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

  const handleShowAdd = () => {
    setFaculty("");
    setOpeningDate(new Date());
    setClosedDate(moment(openingDate).add(1, "days").toDate());
    setOpenModalAdd(true);
  };

  const handleAdd = () => {
    if (faculty == "") {
      setErrorFaculty(true);
      setMessageFaculty("Faculty is required");
    } else {
      setErrorFaculty(false);
    }

    if (faculty != "") {
      mutatePostSchedule(
        {
          faculty: faculty,
          opening: openingDate,
          closed: closedDate,
        },
        {
          onSuccess: () => {
            setOpenModalAdd(false);
            setToast(true);
            refetch();
            refacthLastSchedule();
            setStatusToast("success");
            setMessageToast("Add schedule success!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
          onError: () => {
            setOpenModalAdd(false);
            setToast(true);
            refetch();
            refacthLastSchedule();
            setStatusToast("error");
            setMessageToast("Add schedule failed!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
        }
      );
    }
  };

  const handleShowEdit = (id) => {
    getScheduleById(id).then((res) => {
      setId(res?.data?.id);
      setFaculty(res?.data?.idFaculty);
      setOpeningDate(new Date(res?.data?.opening));
      setClosedDate(new Date(res?.data?.closed));
    });
    setOpenModalEdit(true);
  };

  const handleUpdate = () => {
    if (faculty == "") {
      setErrorFaculty(true);
      setMessageFaculty("Faculty is required");
    } else {
      setErrorFaculty(false);
    }

    if (faculty != "") {
      mutatePutSchedule(
        {
          id: id,
          faculty: faculty,
          opening: openingDate,
          closed: closedDate,
        },
        {
          onSuccess: () => {
            setOpenModalEdit(false);
            setFaculty("");
            setToast(true);
            refetch();
            refacthLastSchedule();
            setStatusToast("success");
            setMessageToast("Edit schedule success!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
          onError: () => {
            setOpenModalEdit(false);
            setFaculty("");
            setToast(true);
            refetch();
            refacthLastSchedule();
            setStatusToast("error");
            setMessageToast("Edit schedule failed!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
        }
      );
    }
  };

  const handleShowDelete = (id) => {
    getScheduleById(id).then((res) => {
      setId(res?.data?.id);
      setFaculty(res?.data?.faculty?.name);
      setClosedDate(new Date(res?.data?.closed));
    });
    setOpenModalDelete(true);
  };

  const handleDelete = () => {
    mutateDeleteSchedule(
      {
        id: id,
      },
      {
        onSuccess: () => {
          setOpenModalDelete(false);
          setToast(true);
          refetch();
          refacthLastSchedule();
          setStatusToast("success");
          setMessageToast("Delete schedule success!");
          setTimeout(() => {
            setToast(false);
          }, 5000);
        },
        onError: () => {
          setOpenModalDelete(false);
          setToast(true);
          refetch();
          refacthLastSchedule();
          setStatusToast("error");
          setMessageToast("Delete schedule failed!");
          setTimeout(() => {
            setToast(false);
          }, 5000);
        },
      }
    );
  };

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

  const formModal = () => {
    return (
      <>
        <FormSelect
          label="Faculty"
          data={resFaculty?.data}
          name="faculty"
          placeholder="Select Faculty"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          error={errorFaculty}
          message={messageFaculty}
        />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Opening
          </label>
          <div className="grid">
            <DatePicker
              selected={openingDate}
              onChange={(date) => setOpeningDate(date)}
              customInput={<ButtonDatePicker />}
              minDate={new Date()}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Closed
          </label>
          <div className="grid">
            <DatePicker
              selected={closedDate}
              onChange={(date) => setClosedDate(date)}
              customInput={<ButtonDatePicker />}
              minDate={moment(openingDate).add(1, "days").toDate()}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <DashboardLayout title="Data Schedule">
      {toast && (
        <ToastNotification status={statusToast} message={messageToast} />
      )}
      <TableLayout
        coloumns={coloumns}
        filter={filterSeacrh()}
        page={page}
        setPage={setPage}
        pageCount={resSchedule?.totalPage}
        rows={resSchedule?.rows}
        rowsPage={resSchedule?.rowsPage}
        totalRows={resSchedule?.totalRows}
        handleShowAdd={handleShowAdd}
        disabled={disabled}
      >
        <TableBodySchedule
          res={resSchedule}
          isPending={isPendingSchedule}
          handleShowEdit={handleShowEdit}
          handleShowDelete={handleShowDelete}
        />
      </TableLayout>
      <ModalForm
        open={openModalAdd}
        setOpen={setOpenModalAdd}
        title="Add Schedule"
        onClick={handleAdd}
        textButton="Submit"
        colorButton="blue"
      >
        <div className="w-full">{formModal()}</div>
      </ModalForm>
      <ModalForm
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        title="Edit Schedule"
        onClick={handleUpdate}
        textButton="Save"
        colorButton="blue"
      >
        <div className="w-full">{formModal()}</div>
      </ModalForm>
      <ModalForm
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        title="Delete Schedule"
        onClick={handleDelete}
        textButton="Delete"
        colorButton="red"
      >
        <div className="w-full">
          <p className="font-semibold text-center">
            Apakah anda yakin ingin menghapus schedule
          </p>
          <p className="font-bold text-center">
            {faculty} pada {moment(new Date(closedDate)).format("DD MMMM YYYY")}
            ?
          </p>
        </div>
      </ModalForm>
    </DashboardLayout>
  );
};

export default SchedulePage;
