import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { getUserById } from "../../services/Users.service";
import { useState } from "react";
import { useEffect } from "react";

export const useLogin = (setLogin) => {
  const [data, setData] = useState("");

  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
      const data = jwtDecode(token);
      getUserById(data.id).then((res) => {
        return setData(res);
      });
    } else {
      setLogin(true);
    }
  }, [token, setLogin]);

  return data;
};
