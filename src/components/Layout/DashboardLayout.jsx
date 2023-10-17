import Bottombar from "../Fragments/Admin/Dashboard/Bottombar";
import Navbar from "../Fragments/Admin/Dashboard/Navbar";
import Sidebar from "../Fragments/Admin/Dashboard/Sidebar";

const DashboardLayout = ({ children, title }) => {
  return (
    <div className="bg-slate-200 min-h-screen flex">
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />
        <div className="py-6 px-10 h-full">
          <div className="text-start">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">{title}</h1>
          </div>
          {children}
        </div>
        <Bottombar />
      </div>
    </div>
  );
};

export default DashboardLayout;
