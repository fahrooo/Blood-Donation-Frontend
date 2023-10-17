const TableHeader = ({ coloumns }) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-blue-100">
      <tr>
        {coloumns.map((coloumn, index) => {
          return (
            <th scope="col" className="px-6 py-4" key={index}>
              {coloumn.name}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
