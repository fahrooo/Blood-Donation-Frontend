const Button = (props) => {
  const {
    type = "button",
    color,
    children,
    className,
    handleOnClick,
    textColor = "white",
    disabled = false,
  } = props;
  return (
    <button
      type={type}
      className={`text-${textColor} bg-${color}-600 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm ${className} hover:bg-${color}-800 disabled:cursor-not-allowed disabled:bg-gray-400`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
