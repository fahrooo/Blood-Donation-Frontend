import Select from "../../components/Elements/Select";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import TableLayout from "../../components/Layout/TableLayout";
import { useState } from "react";
import Input from "../../components/Elements/Input";
import TableBodyEmail from "../../components/Fragments/Admin/Dashboard/TableBodyEmail";
import { GetFaculty, GetFacultyById } from "../../services/Faculty.service";
import {
  DeleteEmail,
  GetEmail,
  PostEmail,
  SendEmail,
  getEmailById,
} from "../../services/Email.service";
import ToastNotification from "../../components/Elements/ToastNotification";
import ModalForm from "../../components/Elements/Modal";
import FormSelect from "../../components/Elements/FormSelect";
import FormInput from "../../components/Elements/FormInput";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import moment from "moment";
import { useMutation } from "@tanstack/react-query";
import { GetUsers } from "../../services/Users.service";

const EmailPage = () => {
  const [searchSubject, setSearchSubject] = useState("");
  const [page, setPage] = useState(1);
  const [selectedFaculty, setSelectedFaculty] = useState("all");
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [id, setId] = useState("");
  const [faculty, setFaculty] = useState("");
  const [nameFaculty, setNameFaculty] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errorFaculty, setErrorFaculty] = useState(false);
  const [errorSubject, setErrorSubject] = useState(false);

  const [messageFaculty, setMessageFaculty] = useState("");
  const [messageSubject, setMessageSubject] = useState("");

  const [toast, setToast] = useState(false);
  const [statusToast, setStatusToast] = useState("");
  const [messageToast, setMessageToast] = useState("");

  const {
    data: resEmail,
    isPending: isPendingEmail,
    refetch,
  } = GetEmail({
    subject: searchSubject.toUpperCase() || "all",
    faculty: selectedFaculty,
    page: page,
    limit: 5,
  });

  const { mutate: mutatePostEmail } = useMutation({
    mutationFn: PostEmail,
  });

  const { mutate: mutateSendEmail } = useMutation({
    mutationFn: SendEmail,
  });

  const { mutate: mutateDeleteEmail } = useMutation({
    mutationFn: DeleteEmail,
  });

  const { data: resFaculty } = GetFaculty({
    name: "all",
    page: 1,
    limit: 9999,
  });

  const { data: resUsers } = GetUsers({
    name: "all",
    faculty: "all",
    role: "all",
    page: 1,
    limit: 9999999,
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

  const handleShowAdd = () => {
    setFaculty("");
    setOpenModalAdd(true);
  };

  const handleSetFaculty = (e) => {
    setFaculty(e.target.value);
    GetFacultyById(e.target.value).then((res) => {
      setNameFaculty(res?.data?.name);
    });
  };

  const handleAdd = () => {
    if (faculty == "") {
      setErrorFaculty(true);
      setMessageFaculty("Faculty is required");
    } else {
      setErrorFaculty(false);
    }
    if (subject == "") {
      setErrorSubject(true);
      setMessageSubject("Subject is required");
    } else {
      setErrorSubject(false);
    }

    if (faculty != "" && subject != "") {
      mutatePostEmail(
        {
          faculty: faculty,
          subject: subject.toUpperCase(),
          message: message,
        },
        {
          onSuccess: () => {
            for (const key in resUsers?.data) {
              mutateSendEmail({
                toEmail: resUsers?.data[key].email,
                subject: subject.toUpperCase(),
                message: message,
              });
            }
            setOpenModalAdd(false);
            setFaculty("");
            setSubject("");
            setToast(true);
            refetch();
            setStatusToast("success");
            setMessageToast("Add Email success!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
          onError: () => {
            setOpenModalAdd(false);
            setFaculty("");
            setSubject("");
            setToast(true);
            refetch();
            setStatusToast("error");
            setMessageToast("Add Email failed!");
            setTimeout(() => {
              setToast(false);
            }, 5000);
          },
        }
      );
    }
  };

  const handleShowDelete = (id) => {
    getEmailById(id).then((res) => {
      setId(res?.data?.id);
      setSubject(res?.data?.subject);
    });
    setOpenModalDelete(true);
  };

  const handleDelete = () => {
    mutateDeleteEmail(
      {
        id: id,
      },
      {
        onSuccess: () => {
          setOpenModalDelete(false);
          setToast(true);
          refetch();
          setStatusToast("success");
          setMessageToast("Delete email success!");
          setTimeout(() => {
            setToast(false);
          }, 5000);
        },
        onError: () => {
          setOpenModalDelete(false);
          setToast(true);
          refetch();
          setStatusToast("error");
          setMessageToast("Delete email failed!");
          setTimeout(() => {
            setToast(false);
          }, 5000);
        },
      }
    );
  };

  const handleResending = (props) => {
    for (const key in resUsers?.data) {
      mutateSendEmail({
        toEmail: resUsers?.data[key].email,
        subject: props.subject,
        message: props.message,
      });
    }
    setToast(true);
    refetch();
    setStatusToast("success");
    setMessageToast("Resend Email success!");
    setTimeout(() => {
      setToast(false);
    }, 5000);
  };

  const filterSeacrh = () => {
    return (
      <>
        <Input
          placeholder="Seacrh Subject"
          className="w-full md:w-56 md:py-2.5 md:px-3"
          type="text"
          onChange={(e) => setSearchSubject(e.target.value)}
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
          label="Faculty"
          data={resFaculty?.data}
          name="faculty"
          placeholder="Select Faculty"
          value={faculty}
          onChange={(e) => handleSetFaculty(e)}
          error={errorFaculty}
          message={messageFaculty}
        />
        <FormInput
          label="Subject"
          type="text"
          name="subject"
          placeholder="Subjct Email"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          error={errorSubject}
          message={messageSubject}
        />
        <div className="w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={`<p>Salam Sehat!</p><p>&nbsp;</p><p>Kami ingin memberitahukan bahwa akan ada kegiatan donor darah di Kampus UIN Syarif Hidayatullah Jakarta, pada :</p><p><br>Hari, Tanggal : ${moment(
              new Date()
            ).format(
              "dddd, Do MMMM YYYY"
            )}<br>Tempat : ${nameFaculty}&nbsp;<br>Waktu : 08.00 - 12.00</p><p>&nbsp;</p><p>Partisipasi Anda adalah harapan saudara kita yang membutuhkan. Segera daftarkan diri Anda melalui link .................</p><p>&nbsp;</p><p>Terima kasih.</p>`}
            onChange={(event, editor) => {
              const data = editor.getData();
              setMessage(data);
            }}
          />
        </div>
      </>
    );
  };

  return (
    <DashboardLayout title="Data Email">
      {toast && (
        <ToastNotification status={statusToast} message={messageToast} />
      )}
      <TableLayout
        coloumns={coloumns}
        filter={filterSeacrh()}
        page={page}
        setPage={setPage}
        pageCount={resEmail?.totalPage}
        rows={resEmail?.rows}
        rowsPage={resEmail?.rowsPage}
        totalRows={resEmail?.totalRows}
        handleShowAdd={handleShowAdd}
      >
        <TableBodyEmail
          res={resEmail}
          isPending={isPendingEmail}
          handleResending={handleResending}
          handleShowDelete={handleShowDelete}
        />
      </TableLayout>
      <ModalForm
        open={openModalAdd}
        setOpen={setOpenModalAdd}
        title="Add Email"
        onClick={handleAdd}
        textButton="Submit"
        colorButton="blue"
      >
        <div className="w-full">{formModal()}</div>
      </ModalForm>
      <ModalForm
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        title="Delete Email"
        onClick={handleDelete}
        textButton="Delete"
        colorButton="red"
      >
        <div className="w-full">
          <p className="font-semibold text-center">
            Apakah anda yakin ingin menghapus email dengan subject
          </p>
          <p className="font-bold text-center">{subject}</p>
        </div>
      </ModalForm>
    </DashboardLayout>
  );
};

export default EmailPage;
