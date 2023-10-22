const FormSelect = ({
  data,
  name,
  label,
  placeholder,
  onChange,
  value,
  disabled,
  error = false,
  message,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`shadow appearance-none border ${
          error ? "border-red-600" : "border-gray-300"
        } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none focus:shadow-outline mb-1 disabled:cursor-not-allowed`}
      >
        <option value="">{placeholder}</option>
        {data.map((item, index) => {
          return (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
      {error && (
        <div className="text-sm text-red-600">
          <span className="font-medium">Oops! </span>
          {message}
        </div>
      )}
    </div>
  );
};

export default FormSelect;
