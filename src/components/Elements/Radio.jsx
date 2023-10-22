const Radio = ({ id, name, label, value, onChange, select, error = false }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        onChange={onChange}
        className={`w-4 h-4 text-blue-600 bg-gray-100 ${
          error ? "border-red-600" : "border-gray-300"
        } focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
        checked={value == select}
      />
      <label
        htmlFor={id}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
