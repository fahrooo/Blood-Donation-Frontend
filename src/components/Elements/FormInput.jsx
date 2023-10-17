const FormInput = (props) => {
  const { label, type, placeholder, name, number = false } = props;
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        onKeyPress={(event) => {
          if (number && !/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      ></input>
    </div>
  );
};

export default FormInput;
