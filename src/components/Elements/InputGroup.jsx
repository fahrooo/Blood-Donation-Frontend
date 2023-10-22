const InputGroup = (props) => {
  const {
    label,
    type,
    placeholder,
    name,
    number = false,
    icon,
    onChange,
    value,
    error = false,
    message,
  } = props;
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="flex mb-1">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md font-medium">
          {icon}
        </span>
        <input
          type={type}
          id={name}
          className={`rounded-none rounded-r-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm ${
            error ? "border-red-600" : "border-gray-300"
          } p-2.5`}
          placeholder={placeholder}
          onKeyPress={(event) => {
            if (number && !/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          value={value}
          onChange={onChange}
        ></input>
      </div>
      {error && (
        <div className="text-sm text-red-600">
          <span className="font-medium">Oops! </span>
          {message}
        </div>
      )}
    </div>
  );
};

export default InputGroup;
