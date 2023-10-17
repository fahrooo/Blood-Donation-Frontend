import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactPaginate from "react-paginate";

const TablePaginate = ({ pageCount, setPage, page }) => {
  return (
    <div>
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
  );
};

export default TablePaginate;
