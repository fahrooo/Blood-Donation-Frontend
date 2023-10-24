import { Spinner } from "flowbite-react";
import MessageDataNotFound from "../../../../utils/Error/MessageDataNotFound";
import Button from "../../../Elements/Button";
import { MdDelete, MdEdit } from "react-icons/md";
import * as changeCase from "change-case";

const TableBodyUsers = ({ res, isPending }) => {
  return (
    <tbody>
      {isPending && (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            colSpan={7}
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
            colSpan={7}
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
                {changeCase.capitalCase(item.name)}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {item.gender == 1 && "Male"}
                {item.gender == 2 && "Female"}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {item?.faculty?.name.length > 0
                  ? changeCase.capitalCase(item?.faculty?.name)
                  : "-"}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {item.email}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {"0"}
                {item.phone}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {item.role == 0 && "Admin"}
                {item.role == 1 && "Dosen"}
                {item.role == 2 && "Staff"}
                {item.role == 3 && "Mahasiswa"}
                {item.role == 4 && "Masyarakat"}
              </th>
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
              >
                <Button className="px-2 py-2 mr-1" color="blue">
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

export default TableBodyUsers;
