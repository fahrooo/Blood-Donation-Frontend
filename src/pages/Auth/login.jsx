import { useState } from "react";
import Button from "../../components/Elements/Button";
import FormInput from "../../components/Elements/FormInput";
import AuthLayout from "../../components/Layout/AuthLayout";
import { Navigate } from "react-router-dom";
import ToastNotification from "../../components/Elements/ToastNotification";
import { login } from "../../services/Auth.service";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const LoginPage = () => {
  const [toDashboard, setToDashboard] = useState(false);
  const [toKuesioner, setToKuesioner] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [messageEmail, setMessageEmail] = useState("");
  const [messagePassword, setMessagePassword] = useState("");

  const [toast, setToast] = useState(false);
  const [statusToast, setStatusToast] = useState("");
  const [messageToast, setMessageToast] = useState("");

  const { mutate: mutateLogin } = useMutation({
    mutationFn: login,
  });

  const handleLogin = () => {
    if (email == "") {
      setErrorEmail(true);
      setMessageEmail("Email is required");
    } else {
      setErrorEmail(false);
    }
    if (password == "") {
      setErrorPassword(true);
      setMessagePassword("Password is required");
    } else {
      setErrorPassword(false);
    }

    if (password != "" && email != "") {
      mutateLogin(
        {
          email: email,
          password: password,
        },
        {
          onSuccess: (res) => {
            Cookies.set("token", res.token, { expires: 0.5 });
            localStorage.setItem("token", res.token);
            const data = jwtDecode(res.token);
            setToast(true);
            setStatusToast("success");
            setMessageToast("Login success!");
            setTimeout(() => {
              setToast(false);
              if (data.role == 5) {
                setToDashboard(true);
              } else {
                setToKuesioner(true);
              }
            }, 3000);
          },
          onError: (err) => {
            if (err.response.status === 404) {
              setToast(true);
              setStatusToast("error");
              setMessageToast("Email not found!");
              setTimeout(() => {
                setToast(false);
              }, 3000);
            } else if (err.response.status === 400) {
              setToast(true);
              setStatusToast("error");
              setMessageToast("Wrong password!");
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
  return (
    <AuthLayout title="Login">
      {toDashboard && <Navigate to="/dashboard" replace={true} />}
      {toKuesioner && <Navigate to="/kuesioner" replace={true} />}
      {toast && (
        <ToastNotification status={statusToast} message={messageToast} />
      )}
      <div className="w-full">
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
        <Button
          color="blue"
          className="w-full px-3 py-3"
          handleOnClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
