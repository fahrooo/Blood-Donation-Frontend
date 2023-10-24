import MessageDataNotFound from "../../../../utils/Error/MessageDataNotFound";
import Button from "../../../Elements/Button";
import { MdDelete, MdEdit } from "react-icons/md";
import Spinner from "../../../Elements/Spinner";
import * as changeCase from "change-case";

const TableBodyFaculty = ({
  res,
  isPending,
  handleShowEdit,
  handleShowDelete,
}) => {
  return (
    <tbody>
      {isPending && (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            colSpan={2}
          >
            <Spinner />
          </th>
        </tr>
      )}
      {res?.status == 404 && (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            colSpan={2}
          >
            <MessageDataNotFound />
          </th>
        </tr>
      )}
      {res?.status != 404 &&
        res?.data?.map((item, index) => {
          return (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {item?.name?.length > 0 && changeCase.capitalCase(item?.name)} (
                {item?.code})
              </th>
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
              >
                <Button
                  className="px-2 py-2 mr-1"
                  color="blue"
                  handleOnClick={() => handleShowEdit(item.id)}
                >
                  <MdEdit />
                </Button>
                <Button
                  className="px-2 py-2"
                  color="red"
                  handleOnClick={() => handleShowDelete(item.id)}
                >
                  <MdDelete />
                </Button>
              </th>
            </tr>
          );
        })}
    </tbody>
  );
};

export default TableBodyFaculty;
