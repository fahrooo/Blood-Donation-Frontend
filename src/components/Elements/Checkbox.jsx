const Checkbox = ({ checked }) => {
  return (
    <input
      id="default-checkbox"
      type="checkbox"
      value=""
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
      checked={checked}
    ></input>
  );
};

export default Checkbox;
