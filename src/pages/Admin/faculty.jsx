import { useState } from "react";
import Input from "../../components/Elements/Input";
import TableBodyFaculty from "../../components/Fragments/Admin/Dashboard/TableBodyFaculty";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";
import {
  DeleteFaculty,
  GetFaculty,
  GetFacultyById,
  PostFaculty,
  PutFaculty,
} from "../../services/Faculty.service";
import FormInput from "../../components/Elements/FormInput";
import ModalForm from "../../components/Elements/Modal";
import { useMutation } from "@tanstack/react-query";
import ToastNotification from "../../components/Elements/ToastNotification";

const FacultyPage = () => {
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [id, setId] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [errorCode, setErrorCode] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [messageCode, setMessageCode] = useState("");
  const [messageName, setMessageName] = useState("");

  const [toast, setToast] = useState(false);
  const [statusToast, setStatusToast] = useState("");
  const [messageToast, setMessageToast] = useState("");

  const {
    data: resFaculty,
    isPending: isPendingFaculty,
    refetch,
  } = GetFaculty({
    name: searchName.toUpperCase() || "all",
    page: page,
    limit: 5,
  });

  const { mutate: mutatePostFaculty } = useMutation({
    mutationFn: PostFaculty,
  });

  const { mutate: mutatePutFaculty } = useMutation({
    mutationFn: PutFaculty,
  });

  const { mutate: mutateDeleteFaculty } = useMutation({
    mutationFn: DeleteFaculty,
  });

  const coloumns = [
    {
      name: "Faculty Name",
    },
    {
      name: "Action",
    },
  ];

  const handleShowAdd = () => {
    setCode("");
    setName("");
    setOpenModalAdd(true);
  };

  const handleAdd = () => {
    if (code == "") {
      setErrorCode(true);
      setMessageCode("Code is required");
    } else {
      setErrorCode(false);
    }
    if (name == "") {
      setErrorName(true);
      setMessageName("Name is required");
    } else {
      setErrorName(false);
    }

    if (code != "" && name != "") {
      mutatePostFaculty(
        {
          code: code.toUpperCase(),
          name: name.toUpperCase(),
        },
        {
          onSuccess: () => {
            setOpenModalAdd(false);
            setCode("");
            setName("");
            setToast(true);
            refetch();
            setStatusToast("success");
            setMessageToast("Add faculty success!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
          onError: () => {
            setOpenModalAdd(false);
            setCode("");
            setName("");
            setToast(true);
            refetch();
            setStatusToast("error");
            setMessageToast("Add faculty failed!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
        }
      );
    }
  };

  const handleShowEdit = (id) => {
    GetFacultyById(id).then((res) => {
      setId(res?.data?.id);
      setCode(res?.data?.code);
      setName(res?.data?.name);
    });
    setOpenModalEdit(true);
  };

  const handleUpdate = () => {
    if (code == "") {
      setErrorCode(true);
      setMessageCode("Code is required");
    } else {
      setErrorCode(false);
    }
    if (name == "") {
      setErrorName(true);
      setMessageName("Name is required");
    } else {
      setErrorName(false);
    }

    if (code != "" && name != "") {
      mutatePutFaculty(
        {
          id: id,
          code: code.toUpperCase(),
          name: name.toUpperCase(),
        },
        {
          onSuccess: () => {
            setOpenModalEdit(false);
            setCode("");
            setName("");
            setToast(true);
            refetch();
            setStatusToast("success");
            setMessageToast("Edit faculty success!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
          onError: () => {
            setOpenModalEdit(false);
            setCode("");
            setName("");
            setToast(true);
            refetch();
            setStatusToast("error");
            setMessageToast("Edit faculty failed!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
        }
      );
    }
  };

  const handleShowDelete = (id) => {
    GetFacultyById(id).then((res) => {
      setId(res?.data?.id);
      setCode(res?.data?.code);
      setName(res?.data?.name);
    });
    setOpenModalDelete(true);
  };

  const handleDelete = () => {
    mutateDeleteFaculty(
      {
        id: id,
      },
      {
        onSuccess: () => {
          setOpenModalDelete(false);
          setToast(true);
          refetch();
          setStatusToast("success");
          setMessageToast("Delete faculty success!");
          setTimeout(() => {
            setToast(false);
          }, 5000);
        },
        onError: () => {
          setOpenModalDelete(false);
          setToast(true);
          refetch();
          setStatusToast("error");
          setMessageToast("Delete faculty failed!");
          setTimeout(() => {
            setToast(false);
          }, 5000);
        },
      }
    );
  };

  const formModal = () => {
    return (
      <>
        <FormInput
          label="Code"
          type="text"
          name="code"
          placeholder="Code Faculty"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          error={errorCode}
          message={messageCode}
        />
        <FormInput
          label="Name"
          type="text"
          name="name"
          placeholder="Name Faculty"
          onChange={(e) => setName(e.target.value)}
          value={name}
          error={errorName}
          message={messageName}
        />
      </>
    );
  };

  return (
    <DashboardLayout title="Data Faculty">
      {toast && (
        <ToastNotification status={statusToast} message={messageToast} />
      )}
      <TableLayout
        coloumns={coloumns}
        filter={
          <Input
            placeholder="Seacrh Name"
            className="w-full md:w-56 md:py-2.5 md:px-3"
            type="text"
            onChange={(e) => setSearchName(e.target.value)}
          />
        }
        page={page}
        setPage={setPage}
        pageCount={resFaculty?.totalPage}
        rows={resFaculty?.rows}
        rowsPage={resFaculty?.rowsPage}
        totalRows={resFaculty?.totalRows}
        handleShowAdd={handleShowAdd}
      >
        <TableBodyFaculty
          res={resFaculty}
          isPending={isPendingFaculty}
          handleShowEdit={handleShowEdit}
          handleShowDelete={handleShowDelete}
        />
      </TableLayout>
      <ModalForm
        open={openModalAdd}
        setOpen={setOpenModalAdd}
        title="Add Faculty"
        onClick={handleAdd}
        textButton="Submit"
        colorButton="blue"
      >
        <div className="w-full">{formModal()}</div>
      </ModalForm>
      <ModalForm
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        title="Edit Faculty"
        onClick={handleUpdate}
        textButton="Save"
        colorButton="blue"
      >
        <div className="w-full">{formModal()}</div>
      </ModalForm>
      <ModalForm
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        title="Delete Faculty"
        onClick={handleDelete}
        textButton="Delete"
        colorButton="red"
      >
        <div className="w-full">
          <p className="font-semibold text-center">
            Apakah anda yakin ingin menghapus
          </p>
          <p className="font-bold text-center">{name}?</p>
        </div>
      </ModalForm>
    </DashboardLayout>
  );
};

export default FacultyPage;
