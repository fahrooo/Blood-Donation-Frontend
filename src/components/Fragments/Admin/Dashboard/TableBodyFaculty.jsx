import Button from "../../../Elements/Button";
import { MdDelete, MdEdit } from "react-icons/md";

const TableBodyFaculty = ({ data }) => {
  return (
    <tbody>
      {data.map((item, index) => {
        return (
          <tr
            key={index}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.name}
            </th>
            <th
              scope="row"
              className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <Button className="px-2 py-2" color="blue">
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

export default TableBodyFaculty;
