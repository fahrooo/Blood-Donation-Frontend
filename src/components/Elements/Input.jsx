const Input = (props) => {
  const { placeholder, className, type, onChange, number = false } = props;
  return (
    <input
      className={`shadow appearance-none border border-gray-300 rounded-lg py-1.5 px-2 text-sm text-gray-700 leading-tight focus:border-blue-500 focus:outline-none focus:shadow-outline ${className}`}
      type={type}
      placeholder={placeholder}
      onKeyPress={(event) => {
        if (number && !/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
      onChange={onChange}
      autoComplete="off"
    ></input>
  );
};

export default Input;
