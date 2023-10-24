import { Spinner } from "flowbite-react";
import MessageDataNotFound from "../../../../utils/Error/MessageDataNotFound";
import Button from "../../../Elements/Button";
import { MdDelete, MdReplay } from "react-icons/md";
import * as changeCase from "change-case";

const TableBodyEmail = ({ res, isPending }) => {
  return (
    <tbody>
      {isPending && (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            colSpan={5}
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
            colSpan={5}
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
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item?.faculty?.name?.length > 0 &&
                  changeCase.capitalCase(item?.faculty?.name)}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item?.subject?.length > 0 &&
                  changeCase.capitalCase(item?.subject)}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white text-start"
              >
                {item?.message?.substring(0, 50)}
                {"..."}
              </th>
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Button className="px-2 py-2 mr-2" color="blue">
                  <MdReplay />
                </Button>
                <Button className="px-2 py-2" color="red">
                  <MdDelete />
                </Button>
              </th>
            </tr>
          );
        })}
    </tbody>
  );
};

export default TableBodyEmail;
