import Cookies from "js-cookie";

export const Logout = (setLogin) => {
  Cookies.remove("token");
  setLogin(true);
};
