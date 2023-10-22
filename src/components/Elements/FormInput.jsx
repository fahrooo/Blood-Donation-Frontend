const FormInput = (props) => {
  const {
    label,
    type,
    placeholder,
    name,
    number = false,
    onChange,
    value,
    error = false,
    message,
  } = props;
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={`shadow appearance-none border ${
          error ? "border-red-600" : "border-gray-300"
        } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none focus:shadow-outline mb-1`}
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onKeyPress={(event) => {
          if (number && !/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onChange={onChange}
        autoComplete="off"
      ></input>
      {error && (
        <div className="text-sm text-red-600">
          <span className="font-medium">Oops! </span>
          {message}
        </div>
      )}
    </div>
  );
};

export default FormInput;
