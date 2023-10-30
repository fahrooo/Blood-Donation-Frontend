import TableHeader from "../Fragments/Admin/Dashboard/TableHeader";
import TablePaginate from "../Fragments/Admin/Dashboard/TablePaginate";
import Button from "../Elements/Button";
import { AiOutlinePlus } from "react-icons/ai";

const TableLayout = (props) => {
  const {
    coloumns,
    children,
    filter,
    setPage,
    page,
    pageCount,
    handleShowAdd,
    rows,
    rowsPage,
    totalRows,
    disabled,
  } = props;

  return (
    <div className="bg-white w-full rounded-lg shadow-lg p-10 mb-16 md:mb-0">
      <div className="w-full">
        <div className="flex flex-col gap-2 md:flex-row justify-center items-center md:justify-end">
          {filter}
          <Button
            color="blue"
            className="w-full md:w-fit py-1.5 px-2 md:py-2.5 md:px-3 flex justify-center items-center"
            handleOnClick={handleShowAdd}
            disabled={disabled}
          >
            <AiOutlinePlus size={20} />
          </Button>
        </div>
      </div>
      <div className={`w-full md:h-fit mt-3 overflow-y-auto`}>
        <div className="relative overflow-x-auto rounded-t-xl h-full">
          <table className="w-full text-sm text-gray-500 text-center border border-gray-200">
            <TableHeader coloumns={coloumns} />
            {children}
          </table>
        </div>
      </div>
      <div className="flex justify-center md:justify-end mt-6">
        <TablePaginate
          page={page}
          setPage={setPage}
          pageCount={pageCount}
          rows={rows}
          rowsPage={rowsPage}
          totalRows={totalRows}
        />
      </div>
    </div>
  );
};

export default TableLayout;
