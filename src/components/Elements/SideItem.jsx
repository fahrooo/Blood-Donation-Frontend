import { Link } from "react-router-dom";

const SideItem = (props) => {
  const { icon, title, active, route } = props;
  return (
    <Link
      className={
        active
          ? "bg-blue-600 text-white p-3 rounded-md flex items-center gap-2 cursor-pointer justify-center md:justify-start w-full"
          : "bg-white text-black p-3 rounded-md flex items-center gap-2 cursor-pointer hover:bg-blue-600 hover:text-white justify-center md:justify-start w-full"
      }
      to={route}
    >
      <div className="">{icon}</div>
      <h2 className="font-semibold hidden md:block">{title}</h2>
    </Link>
  );
};

export default SideItem;
