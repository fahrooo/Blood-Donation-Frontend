import { useQuery } from "@tanstack/react-query";
import {
  deleteFetcher,
  getFetchcer,
  postFetcher,
  putFetcher,
} from "../utils/axios";

export const GetUsers = (props) => {
  const { name, faculty, role, page, limit } = props;
  const url = `users?name=${name}&faculty=${faculty}&role=${role}&page=${page}&limit=${limit}`;

  const { data, ...others } = useQuery({
    queryKey: [name, faculty, role, page, limit],
    queryFn: async () => await getFetchcer(url),
  });

  return { data, ...others };
};

export const getUserById = async (id) => {
  const url = `users/${id}`;

  const response = await getFetchcer(url);

  return response;
};

export const PostUsers = async (payload) => {
  const url = "users";

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

export const PutUsers = async (payload) => {
  const url = `users/${payload.id}`;

  const data = {
    idFaculty: payload.faculty,
    name: payload.name,
    gender: payload.gender,
    email: payload.email,
    phone: payload.phone,
    role: payload.role,
  };

  const response = await putFetcher(url, data);

  return response;
};

export const DeleteUsers = async (payload) => {
  const url = `users/${payload.id}`;

  const response = await deleteFetcher(url);

  return response;
};
