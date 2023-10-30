import { useQuery } from "@tanstack/react-query";
import {
  deleteFetcher,
  getFetchcer,
  postFetcher,
  putFetcher,
} from "../utils/axios";

export const GetDonor = (props) => {
  const { name, faculty, page, limit } = props;
  const url = `donor?name=${name}&faculty=${faculty}&page=${page}&limit=${limit}`;

  const { data, ...others } = useQuery({
    queryKey: [name, faculty, page, limit],
    queryFn: async () => await getFetchcer(url),
  });

  return { data, ...others };
};

export const getDonorById = async (id) => {
  const url = `donor/${id}`;

  const response = await getFetchcer(url);

  return response;
};

export const getDonorByDate = async ({ idUser, date }) => {
  const url = "donor/bydate";

  const data = {
    idUser: idUser,
    date: date,
  };

  const response = await postFetcher(url, data);

  return response;
};

export const getDonorByMonthYear = async ({ month, year }) => {
  const url = "donor/bymonthyear";

  const data = {
    month: month,
    year: year,
  };

  const response = await postFetcher(url, data);

  return response;
};

export const PostDonor = async (payload) => {
  const url = "donor";

  const data = {
    idUser: payload.idUser,
    idSchedule: payload.idSchedule,
    isRegister: payload.isRegister,
    isDonor: payload.isDonor,
  };

  const response = await postFetcher(url, data);

  return response;
};

export const PutDonor = async (payload) => {
  const url = `donor/${payload.id}`;

  const data = {
    idUser: payload.idUser,
    idSchedule: payload.idSchedule,
    isRegister: payload.isRegister,
    isDonor: payload.isDonor,
  };

  const response = await putFetcher(url, data);

  return response;
};

export const DeleteDonor = async (payload) => {
  const url = `donor/${payload.id}`;

  const response = await deleteFetcher(url);

  return response;
};
