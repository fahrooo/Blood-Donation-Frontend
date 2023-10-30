import { Link } from "react-router-dom";
import logo from "/images/logo.png";

const AuthLayout = ({ children, title }) => {
  return (
    <div className="h-screen w-full flex">
      <div className="w-full md:w-1/2 bg-white text-black h-full hidden md:flex flex-col justify-center items-center font-bold gap-4">
        <img src={logo} className="w-52" />
        <h1 className="text-6xl">Bloodis</h1>
      </div>
      <div className="w-full md:w-1/2 bg-blue-600 h-full flex justify-center items-center px-5">
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-10 rounded-xl shadow-xl">
          <h1 className="text-3xl font-bold mb-8">{title}</h1>
          {children}
          <div className="w-full mt-5 flex justify-center items-center">
            <h6 className="font-semibold">
              {title == "Login"
                ? "Don`t have account?"
                : "Already have an account?"}{" "}
              <Link
                className="text-blue-600"
                to={title == "Login" ? "/register" : "/login"}
              >
                {title == "Login" ? "Register" : "Login"}
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
