import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/Admin/dashboard";
import FacultyPage from "./pages/Admin/faculty";
import UsersPage from "./pages/Admin/users";
import SchedulePage from "./pages/Admin/schedule";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/register";
import EmailPage from "./pages/Admin/email";
import KuesionerPage from "./pages/User/kuesioner";
import DonorPage from "./pages/Admin/donors";
import TestPage from "./pages/test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello World!</h1>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/faculty",
    element: <FacultyPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/schedule",
    element: <SchedulePage />,
  },
  {
    path: "/donor",
    element: <DonorPage />,
  },
  {
    path: "/email",
    element: <EmailPage />,
  },
  {
    path: "/kuesioner",
    element: <KuesionerPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
