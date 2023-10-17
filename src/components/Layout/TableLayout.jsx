import { useState } from "react";
import TableHeader from "../Fragments/Admin/Dashboard/TableHeader";
import TablePaginate from "../Fragments/Admin/Dashboard/TablePaginate";

const TableLayout = (props) => {
  const { coloumns, children, filter } = props;
  const [page, setPage] = useState(1);

  return (
    <div className="bg-white w-full rounded-lg shadow-lg p-10 mb-16 md:mb-0">
      <div className="w-full">
        <div className="flex flex-col gap-2 md:flex-row justify-center items-center md:justify-end">
          {filter}
          <button className="btn bg-blue-600 hover:bg-blue-800 text-white btn-sm w-full md:w-fit">
            Tambah
          </button>
        </div>
      </div>
      <div className={`w-full md:h-fit mt-3 overflow-y-auto`}>
        <div className="relative overflow-x-auto rounded-t-xl h-full">
          <table className="w-full text-sm text-gray-500 text-center">
            <TableHeader coloumns={coloumns} />
            {children}
          </table>
        </div>
      </div>
      <div className="flex justify-center md:justify-end mt-6">
        <TablePaginate page={page} setPage={setPage} pageCount={100} />
      </div>
    </div>
  );
};

export default TableLayout;
