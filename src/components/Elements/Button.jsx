const Button = (props) => {
  const {
    color,
    children,
    className,
    handleOnClick,
    textColor = "white",
  } = props;
  return (
    <button
      type="button"
      className={`text-${textColor} bg-${color}-600 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm mr-2 mb-2 ${className}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
