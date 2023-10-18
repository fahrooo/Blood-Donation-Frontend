import {
  MdDashboard,
  MdEmail,
  MdMapsHomeWork,
  MdOutlineHealing,
  MdPeople,
  MdSchedule,
} from "react-icons/md";
import SideItem from "../../../Elements/SideItem";

const Bottombar = () => {
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
    <div className="fixed bottom-0 py-3 px-2 bg-white w-full md:hidden flex justify-center items-center">
      <div className="grid grid-cols-6 w-full gap-4">
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
    </div>
  );
};

export default Bottombar;
