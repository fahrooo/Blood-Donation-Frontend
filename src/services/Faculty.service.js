import { useQuery } from "@tanstack/react-query";
import {
  deleteFetcher,
  getFetchcer,
  postFetcher,
  putFetcher,
} from "../utils/axios";

export const GetFaculty = (props) => {
  const { name, page, limit } = props;
  const url = `faculty?name=${name}&page=${page}&limit=${limit}`;

  const { data, ...others } = useQuery({
    queryKey: [name, page, limit],
    queryFn: async () => await getFetchcer(url),
  });

  return { data, ...others };
};

export const GetFacultyById = async (id) => {
  const url = `faculty/${id}`;

  const response = await getFetchcer(url);

  return response;
};

export const PostFaculty = async (payload) => {
  const url = "faculty";

  const data = {
    code: payload.code,
    name: payload.name,
  };

  const response = await postFetcher(url, data);

  return response;
};

export const PutFaculty = async (payload) => {
  const url = `faculty/${payload.id}`;

  const data = {
    code: payload.code,
    name: payload.name,
  };

  const response = await putFetcher(url, data);

  return response;
};

export const DeleteFaculty = async (payload) => {
  const url = `faculty/${payload.id}`;

  const response = await deleteFetcher(url);

  return response;
};
