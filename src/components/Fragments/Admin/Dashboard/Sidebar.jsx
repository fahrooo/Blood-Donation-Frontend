import {
  MdDashboard,
  MdEmail,
  MdLogout,
  MdMapsHomeWork,
  MdOutlineHealing,
  MdPeople,
  MdSchedule,
} from "react-icons/md";
import SideItem from "../../../Elements/SideItem";
import { Navigate, useLocation } from "react-router-dom";
import { Logout } from "../../../hooks/useLogout";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [login, setLogin] = useState(false);

  const menus = [
    {
      title: "Dashboard",
      icon: <MdDashboard size={20} />,
      route: "/dashboard",
    },
    {
      title: "Faculty",
      icon: <MdMapsHomeWork size={20} />,
      route: "/faculty",
    },
    {
      title: "Users",
      icon: <MdPeople size={20} />,
      route: "/users",
    },
    {
      title: "Schedule",
      icon: <MdSchedule size={20} />,
      route: "/schedule",
    },
    {
      title: "Donor",
      icon: <MdOutlineHealing size={20} />,
      route: "/donor",
    },
    {
      title: "Email",
      icon: <MdEmail size={20} />,
      route: "/email",
    },
  ];

  return (
    <aside className="hidden md:block w-96 bg-white min-h-screen z-50">
      {login && <Navigate to="/login" replace={true} />}
      <div className="h-[10%] shadow-lg text-center flex justify-center items-center gap-2 border-r">
        <MdOutlineHealing size={40} />
        <h1 className="font-bold text-xl">Blood Donation</h1>
      </div>
      <div className="h-[90%] p-8 flex flex-col justify-between bg-slate-100">
        <div className="flex flex-col gap-2">
          {menus.map((menu, index) => {
            return (
              <SideItem
                key={index}
                icon={menu.icon}
                title={menu.title}
                route={menu.route}
                active={location.pathname == menu.route ? true : false}
              />
            );
          })}
        </div>
        <div
          className="bg-red-600 hover:bg-red-800 text-white p-3 rounded-md flex items-center gap-2 cursor-pointer"
          onClick={() => Logout(setLogin)}
        >
          <div>
            <MdLogout size={20} />
          </div>
          <h2 className="font-semibold">Logout</h2>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
