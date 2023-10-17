import { useState } from "react";
import Button from "../../components/Elements/Button";
import FormInput from "../../components/Elements/FormInput";
import Radio from "../../components/Elements/Radio";
import AuthLayout from "../../components/Layout/AuthLayout";
import { MdKeyboardBackspace } from "react-icons/md";
import Select from "../../components/Elements/Select";
import InputGroup from "../../components/Elements/InputGroup";

const RegisterPage = () => {
  const [form, setForm] = useState(1);
  const [selectedFaculty, setSelectedFaculty] = useState(0);
  const [selectedRole, setSelectedRole] = useState(0);

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

  const dataFaculty = [
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
    <AuthLayout title="Register">
      {form == 1 && (
        <div className="w-full">
          <FormInput
            label="Full Name"
            type="text"
            name="name"
            placeholder="Full Name"
          />
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="faculty"
            >
              Role
            </label>
            <Select
              placeholder="Select Role"
              data={dataRole}
              selected={selectedRole}
              setSelected={setSelectedRole}
              className="w-full py-2"
              width="w-full"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <div className="flex gap-5">
              <Radio label="Male" name="gender" id="male" checked={true} />
              <Radio label="Female" name="gender" id="female" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              color="blue"
              className="w-fit px-5 py-3"
              handleOnClick={() => setForm(2)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {form == 2 && (
        <div className="w-full">
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="faculty"
            >
              Faculty
            </label>
            <Select
              placeholder="Select Faculty"
              data={dataFaculty}
              selected={selectedFaculty}
              setSelected={setSelectedFaculty}
              className="w-full py-2"
              width="w-full"
            />
          </div>
          <FormInput
            label="Email Address"
            type="email"
            name="email"
            placeholder="example@gmail.com"
          />
          <InputGroup
            label="Phone Number"
            type="text"
            name="phone"
            placeholder="8xx-xxxx-xxxx"
            number={true}
            icon="+62"
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
              handleOnClick={() => setForm(3)}
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
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confPassword"
            placeholder="********"
          />
          <div className="flex flex-col items-center gap-2">
            <Button color="blue" className="w-full px-3 py-3">
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
