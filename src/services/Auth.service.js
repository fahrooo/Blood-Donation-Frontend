import { postFetcher } from "../utils/axios";

export const register = async (payload) => {
  const url = "register";

  const data = {
    idFaculty: payload.faculty,
    name: payload.name,
    gender: payload.gender,
    email: payload.email,
    phone: payload.phone,
    role: payload.role,
    password: payload.password,
  };

  const response = await postFetcher(url, data);

  return response;
};
