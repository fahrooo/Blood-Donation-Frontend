import Button from "../../../Elements/Button";
import { MdDelete, MdEdit } from "react-icons/md";
import Checkbox from "../../../Elements/Checkbox";
import MessageDataNotFound from "../../../../utils/Error/MessageDataNotFound";
import { Spinner } from "flowbite-react";
import * as changeCase from "change-case";
import moment from "moment";

const TableBodyDonors = ({ res, isPending }) => {
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
                {item?.user?.name.length > 0 &&
                  changeCase.capitalCase(item?.user?.name)}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item?.schedule?.faculty?.name.length > 0 &&
                  changeCase.capitalCase(item?.schedule?.faculty?.name)}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {moment(item?.schedule?.closed).format("DD MMMM YYYY")}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Checkbox checked={item.isDonor} />
              </th>
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Button className="px-2 py-2 mr-2" color="blue">
                  <MdEdit />
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

export default TableBodyDonors;
