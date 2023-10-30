import { MdOutlineHealing } from "react-icons/md";
import Dropdown from "../../Elements/Dropdown";

const Navbar = () => {
  return (
    <div className="h-[10%] flex justify-between items-center px-5 md:px-10 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-2xl">
      <div className="text-white flex justify-center items-center gap-3">
        <MdOutlineHealing size={40} />
        <h4 className="text-xl font-bold hidden md:block">Blood Donation</h4>
      </div>
      <div className="flex justify-center items-center gap-2 text-white">
        <h1 className="text-sm md:text-base font-semibold">Halo,</h1>
        <Dropdown />
      </div>
    </div>
  );
};

export default Navbar;
