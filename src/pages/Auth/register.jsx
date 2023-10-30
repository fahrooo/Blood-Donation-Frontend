import { useEffect, useState } from "react";
import Button from "../../components/Elements/Button";
import FormInput from "../../components/Elements/FormInput";
import Radio from "../../components/Elements/Radio";
import AuthLayout from "../../components/Layout/AuthLayout";
import { MdKeyboardBackspace } from "react-icons/md";
import InputGroup from "../../components/Elements/InputGroup";
import FormSelect from "../../components/Elements/FormSelect";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../services/Auth.service";
import ToastNotification from "../../components/Elements/ToastNotification";
import { Navigate } from "react-router-dom";
import { GetFaculty } from "../../services/Faculty.service";

const RegisterPage = () => {
  const [form, setForm] = useState(1);
  const [toLogin, setToLogin] = useState(false);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [faculty, setFaculty] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorRole, setErrorRole] = useState(false);
  const [errorGender, setErrorGender] = useState(false);
  const [errorFaculty, setErrorFaculty] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfPassword, setErrorConfPassword] = useState(false);

  const [messageName, setMessageName] = useState("");
  const [messageRole, setMessageRole] = useState("");
  const [messageGender, setMessageGender] = useState("");
  const [messageFaculty, setMessageFaculty] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePhone, setMessagePhone] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [messageConfPassword, setMessageConfPassword] = useState("");

  const [toast, setToast] = useState(false);
  const [statusToast, setStatusToast] = useState("");
  const [messageToast, setMessageToast] = useState("");

  const { mutate: mutateRegister } = useMutation({
    mutationFn: register,
  });

  useEffect(() => {
    if (faculty == "" && role == 4) {
      setFaculty(null);
    }
  }, [faculty, role]);

  const handleForm1 = () => {
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

    if (name != "" && role != "" && gender != "") {
      setForm(2);
    }
  };

  const handleForm2 = () => {
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

    if (faculty != "" && email != "" && phone != "") {
      setForm(3);
    }
  };

  const handleRegister = () => {
    if (password == "") {
      setErrorPassword(true);
      setMessagePassword("Password is required");
    } else {
      setErrorPassword(false);
    }
    if (password != "" && password.length < 8) {
      setErrorPassword(true);
      setMessagePassword("Password less than 8 characters");
    } else {
      setErrorPassword(false);
    }
    if (confPassword == "") {
      setErrorConfPassword(true);
      setMessageConfPassword("Confirm Password is required");
    } else {
      setErrorConfPassword(false);
    }
    if (confPassword != "" && confPassword != password) {
      setErrorConfPassword(true);
      setMessageConfPassword("Confirm Password not match with your password");
    } else {
      setErrorConfPassword(false);
    }

    if (
      password != "" &&
      confPassword != "" &&
      password == confPassword &&
      password.length >= 8
    ) {
      mutateRegister(
        {
          name: name.toUpperCase(),
          role: role,
          gender: gender,
          faculty: faculty,
          email: email,
          phone: phone,
          password: password,
        },
        {
          onSuccess: () => {
            setToast(true);
            setStatusToast("success");
            setMessageToast("Register success!");
            setTimeout(() => {
              setToast(false);
              setToLogin(true);
            }, 3000);
          },
          onError: (err) => {
            if (err.response.status === 404) {
              setToast(true);
              setStatusToast("error");
              setMessageToast("Email is already!");
              setTimeout(() => {
                setToast(false);
              }, 3000);
            } else {
              setToast(true);
              setStatusToast("error");
              setMessageToast("Please try again!");
              setTimeout(() => {
                setToast(false);
              }, 5000);
            }
          },
        }
      );
    }
  };

  const dataRole = [
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

  const { data: resFaculty } = GetFaculty({
    name: "all",
    page: 1,
    limit: 9999,
  });

  return (
    <AuthLayout title="Register">
      {toLogin && <Navigate to="/login" replace={true} />}
      {toast && (
        <ToastNotification status={statusToast} message={messageToast} />
      )}
      {form == 1 && (
        <div className="w-full">
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
          <div className="flex justify-end">
            <Button
              color="blue"
              className="w-fit px-5 py-3"
              handleOnClick={handleForm1}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {form == 2 && (
        <div className="w-full">
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
          <div className="flex justify-between">
            <Button
              textColor="blue-600"
              className="w-fit flex items-center gap-1"
              handleOnClick={() => setForm(1)}
            >
              <MdKeyboardBackspace size={20} />
              <p>Back</p>
            </Button>
            <Button
              color="blue"
              className="w-fit px-5 py-3"
              handleOnClick={handleForm2}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {form == 3 && (
        <div className="w-full">
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errorPassword}
            message={messagePassword}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confPassword"
            placeholder="********"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
            error={errorConfPassword}
            message={messageConfPassword}
          />
          <div className="flex flex-col items-center gap-2">
            <Button
              color="blue"
              className="w-full px-3 py-3"
              handleOnClick={handleRegister}
            >
              Register
            </Button>
            <Button
              textColor="blue-600"
              className="w-fit flex items-center gap-1"
              handleOnClick={() => setForm(2)}
            >
              <MdKeyboardBackspace size={20} />
              <p>Back</p>
            </Button>
          </div>
        </div>
      )}
    </AuthLayout>
  );
};

export default RegisterPage;
