const Input = (props) => {
  const { placeholder } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered input-sm w-full md:max-w-[200px]"
    />
  );
};

export default Input;
