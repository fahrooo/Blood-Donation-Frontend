import { useEffect, useState } from "react";
import Input from "../../components/Elements/Input";
import Select from "../../components/Elements/Select";
import TableBodyUsers from "../../components/Fragments/Admin/Dashboard/TableBodyUsers";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";
import {
  DeleteUsers,
  GetUsers,
  PostUsers,
  PutUsers,
  getUserById,
} from "../../services/Users.service";
import { GetFaculty } from "../../services/Faculty.service";
import ModalForm from "../../components/Elements/Modal";
import FormInput from "../../components/Elements/FormInput";
import FormSelect from "../../components/Elements/FormSelect";
import Radio from "../../components/Elements/Radio";
import InputGroup from "../../components/Elements/InputGroup";
import { useMutation } from "@tanstack/react-query";
import ToastNotification from "../../components/Elements/ToastNotification";

const UsersPage = () => {
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  const [selectedFaculty, setSelectedFaculty] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");

  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [faculty, setFaculty] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorRole, setErrorRole] = useState(false);
  const [errorGender, setErrorGender] = useState(false);
  const [errorFaculty, setErrorFaculty] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  const [messageName, setMessageName] = useState("");
  const [messageRole, setMessageRole] = useState("");
  const [messageGender, setMessageGender] = useState("");
  const [messageFaculty, setMessageFaculty] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePhone, setMessagePhone] = useState("");

  const [toast, setToast] = useState(false);
  const [statusToast, setStatusToast] = useState("");
  const [messageToast, setMessageToast] = useState("");

  const {
    data: resUsers,
    isPending: isPendingUsers,
    refetch,
  } = GetUsers({
    name: searchName.toUpperCase() || "all",
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

  const { mutate: mutatePostUsers } = useMutation({
    mutationFn: PostUsers,
  });

  const { mutate: mutatePutUsers } = useMutation({
    mutationFn: PutUsers,
  });

  const { mutate: mutateDeleteUsers } = useMutation({
    mutationFn: DeleteUsers,
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
      id: 5,
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

  useEffect(() => {
    if (faculty == "" && role == 4) {
      setFaculty(null);
    }
  }, [faculty, role]);

  const handleShowAdd = () => {
    setName("");
    setRole("");
    setGender("");
    setFaculty("");
    setEmail("");
    setPhone("");
    setOpenModalAdd(true);
  };

  const handleAdd = () => {
    if (name == "") {
      setErrorName(true);
      setMessageName("Name is required");
    } else {
      setErrorName(false);
    }
    if (role == "") {
      setErrorRole(true);
      setMessageRole("Role is required");
    } else {
      setErrorRole(false);
    }
    if (gender == "") {
      setErrorGender(true);
      setMessageGender("Gender is required");
    } else {
      setErrorGender(false);
    }
    if (faculty == "" && role != 4) {
      setErrorFaculty(true);
      setMessageFaculty("Faculty is required");
    } else {
      setErrorFaculty(false);
    }
    if (email == "") {
      setErrorEmail(true);
      setMessageEmail("Email is required");
    } else {
      setErrorEmail(false);
    }
    if (phone == "") {
      setErrorPhone(true);
      setMessagePhone("Phone is required");
    } else {
      setErrorPhone(false);
    }

    if (
      name != "" &&
      role != "" &&
      gender != "" &&
      faculty != "" &&
      email != "" &&
      phone != ""
    ) {
      mutatePostUsers(
        {
          name: name.toUpperCase(),
          role: role,
          gender: gender,
          faculty: faculty,
          email: email,
          phone: phone,
          password: "12345678",
        },
        {
          onSuccess: () => {
            setOpenModalAdd(false);
            setName("");
            setRole("");
            setGender("");
            setFaculty("");
            setEmail("");
            setPhone("");
            setToast(true);
            refetch();
            setStatusToast("success");
            setMessageToast("Add user success!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
          onError: () => {
            setOpenModalAdd(false);
            setName("");
            setRole("");
            setGender("");
            setFaculty("");
            setEmail("");
            setPhone("");
            setToast(true);
            refetch();
            setStatusToast("error");
            setMessageToast("Add user failed!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
        }
      );
    }
  };

  const handleShowEdit = (id) => {
    getUserById(id).then((res) => {
      setId(res?.data?.id);
      setName(res?.data?.name);
      setRole(res?.data?.role);
      setGender(res?.data?.gender);
      setFaculty(res?.data?.idFaculty);
      setEmail(res?.data?.email);
      setPhone(res?.data?.phone);
    });
    setOpenModalEdit(true);
  };

  const handleUpdate = () => {
    if (name == "") {
      setErrorName(true);
      setMessageName("Name is required");
    } else {
      setErrorName(false);
    }
    if (role == "") {
      setErrorRole(true);
      setMessageRole("Role is required");
    } else {
      setErrorRole(false);
    }
    if (gender == "") {
      setErrorGender(true);
      setMessageGender("Gender is required");
    } else {
      setErrorGender(false);
    }
    if (faculty == "" && role != 4) {
      setErrorFaculty(true);
      setMessageFaculty("Faculty is required");
    } else {
      setErrorFaculty(false);
    }
    if (email == "") {
      setErrorEmail(true);
      setMessageEmail("Email is required");
    } else {
      setErrorEmail(false);
    }
    if (phone == "") {
      setErrorPhone(true);
      setMessagePhone("Phone is required");
    } else {
      setErrorPhone(false);
    }

    if (
      name != "" &&
      role != "" &&
      gender != "" &&
      faculty != "" &&
      email != "" &&
      phone != ""
    ) {
      mutatePutUsers(
        {
          id: id,
          name: name.toUpperCase(),
          role: role,
          gender: gender,
          faculty: faculty,
          email: email,
          phone: phone,
        },
        {
          onSuccess: () => {
            setOpenModalEdit(false);
            setName("");
            setRole("");
            setGender("");
            setFaculty("");
            setEmail("");
            setPhone("");
            setToast(true);
            refetch();
            setStatusToast("success");
            setMessageToast("Edit user success!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
          onError: () => {
            setOpenModalEdit(false);
            setName("");
            setRole("");
            setGender("");
            setFaculty("");
            setEmail("");
            setPhone("");
            setToast(true);
            refetch();
            setStatusToast("error");
            setMessageToast("Edit user failed!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
        }
      );
    }
  };

  const handleShowDelete = (id) => {
    getUserById(id).then((res) => {
      setId(res?.data?.id);
      setName(res?.data?.name);
      setRole(res?.data?.role);
      setGender(res?.data?.gender);
      setFaculty(res?.data?.idFaculty);
      setEmail(res?.data?.email);
      setPhone(res?.data?.phone);
    });
    setOpenModalDelete(true);
  };

  const handleDelete = () => {
    mutateDeleteUsers(
      {
        id: id,
      },
      {
        onSuccess: () => {
          setOpenModalDelete(false);
          setToast(true);
          refetch();
          setStatusToast("success");
          setMessageToast("Delete user success!");
          setTimeout(() => {
            setToast(false);
          }, 5000);
        },
        onError: () => {
          setOpenModalDelete(false);
          setToast(true);
          refetch();
          setStatusToast("error");
          setMessageToast("Delete user failed!");
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

  const formModal = () => {
    return (
      <>
        <FormInput
          label="Full Name"
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          error={errorName}
          message={messageName}
        />
        <FormSelect
          label="Role"
          data={dataRole}
          name="role"
          placeholder="Select Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          error={errorRole}
          message={messageRole}
        />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Gender
          </label>
          <div className="flex gap-5">
            <Radio
              label="Male"
              name="gender"
              id="male"
              value="1"
              onChange={(e) => setGender(e.target.value)}
              select={gender}
            />
            <Radio
              label="Female"
              name="gender"
              id="female"
              value="2"
              onChange={(e) => setGender(e.target.value)}
              select={gender}
            />
          </div>
          {errorGender && (
            <div className="text-sm text-red-600 mt-1">
              <span className="font-medium">Oops! </span>
              {messageGender}
            </div>
          )}
        </div>
        <FormSelect
          label="Faculty"
          data={resFaculty?.data}
          name="faculty"
          placeholder="Select Faculty"
          value={faculty}
          disabled={role == 4}
          onChange={(e) => setFaculty(e.target.value)}
          error={errorFaculty}
          message={messageFaculty}
        />
        <FormInput
          label="Email Address"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errorEmail}
          message={messageEmail}
        />
        <InputGroup
          label="Phone Number"
          type="text"
          name="phone"
          placeholder="8xx-xxxx-xxxx"
          number={true}
          icon="+62"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errorPhone}
          message={messagePhone}
        />
      </>
    );
  };

  return (
    <DashboardLayout title="Data Users">
      {toast && (
        <ToastNotification status={statusToast} message={messageToast} />
      )}
      <TableLayout
        coloumns={coloumns}
        filter={filterSeacrh()}
        page={page}
        setPage={setPage}
        pageCount={resUsers?.totalPage}
        rows={resUsers?.rows}
        rowsPage={resUsers?.rowsPage}
        totalRows={resUsers?.totalRows}
        handleShowAdd={handleShowAdd}
      >
        <TableBodyUsers
          res={resUsers}
          isPending={isPendingUsers}
          handleShowEdit={handleShowEdit}
          handleShowDelete={handleShowDelete}
        />
      </TableLayout>
      <ModalForm
        open={openModalAdd}
        setOpen={setOpenModalAdd}
        title="Add User"
        onClick={handleAdd}
        textButton="Submit"
        colorButton="blue"
      >
        <div className="w-full">{formModal()}</div>
      </ModalForm>
      <ModalForm
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        title="Edit User"
        onClick={handleUpdate}
        textButton="Save"
        colorButton="blue"
      >
        <div className="w-full">{formModal()}</div>
      </ModalForm>
      <ModalForm
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        title="Delete User"
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

export default UsersPage;
