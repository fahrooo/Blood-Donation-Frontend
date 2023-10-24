const Button = (props) => {
  const {
    type = "button",
    color,
    children,
    className,
    handleOnClick,
    textColor = "white",
  } = props;
  return (
    <button
      type={type}
      className={`text-${textColor} bg-${color}-600 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm ${className}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
