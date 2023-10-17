import { MdLogout, MdOutlineHealing } from "react-icons/md";
import Button from "../../../Elements/Button";
import Dropdown from "../../../Elements/Dropdown";

const Navbar = () => {
  return (
    <nav className="bg-white px-6 py-3 md:py-6 flex flex-row justify-between md:justify-end items-center w-full top-0 sticky border-b-2 border-gray-200 z-50">
      <MdOutlineHealing size={40} className="md:hidden" />
      <div className="flex justify-center items-center gap-2">
        <h1 className="text-sm md:text-base font-semibold">Halo,</h1>
        <Dropdown />
        <Button color="red" className="p-1.5 mt-1.5 hidden">
          <MdLogout size={20} />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
