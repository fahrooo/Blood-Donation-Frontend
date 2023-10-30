import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactPaginate from "react-paginate";

const TablePaginate = ({
  pageCount,
  setPage,
  page,
  rows,
  rowsPage,
  totalRows,
}) => {
  return (
    <>
      {pageCount > 0 && (
        <div className="w-full flex flex-col gap-2 text-sm md:text-base md:flex-row md:justify-between items-center font-semibold">
          <div>
            <p>
              Showing {rows} to {rowsPage} of {totalRows} entries
            </p>
          </div>
          <ReactPaginate
            breakLabel="..."
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={pageCount == undefined ? 0 : pageCount}
            nextLabel={<FiChevronRight />}
            previousLabel={<FiChevronLeft />}
            renderOnZeroPageCount={null}
            containerClassName="flex justify-center items-center gap-2 font-semibold"
            previousLinkClassName="flex justify-center items-center hover:bg-blue-600 hover:text-white w-6 h-6 md:w-8 md:h-8 text-blue-600 rounded-md select-none transition-transform"
            nextLinkClassName="flex justify-center items-center hover:bg-blue-600 hover:text-white w-6 h-6 md:w-8 md:h-8 text-blue-600 rounded-md select-none transition-transform"
            pageLinkClassName="flex justify-center items-center hover:bg-blue-600 hover:text-white w-6 h-6 md:w-8 md:h-8 text-blue-600 rounded-md select-none transition-transform"
            activeLinkClassName="bg-blue-600 text-white"
            disabledLinkClassName="cursor-not-allowed"
            breakClassName="py-3 text-blue-600"
            onPageChange={(page) => setPage(page.selected + 1)}
            forcePage={page - 1}
          />
        </div>
      )}
    </>
  );
};

export default TablePaginate;
