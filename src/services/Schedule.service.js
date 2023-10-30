import { useQuery } from "@tanstack/react-query";
import { deleteFetcher, getFetchcer, postFetcher, putFetcher } from "../utils/axios";

export const GetSchedule = (props) => {
  const { faculty, page, limit } = props;
  const url = `schedule?faculty=${faculty}&page=${page}&limit=${limit}`;

  const { data, ...others } = useQuery({
    queryKey: [faculty, page, limit],
    queryFn: async () => await getFetchcer(url),
  });

  return { data, ...others };
};

export const getScheduleById = async (id) => {
  const url = `schedule/${id}`;

  const response = await getFetchcer(url);

  return response;
};

export const PostSchedule = async (payload) => {
  const url = "schedule";

  const data = {
    idFaculty: payload.faculty,
    opening: payload.opening,
    closed: payload.closed,
  };

  const response = await postFetcher(url, data);

  return response;
};

export const PutSchedule = async (payload) => {
  const url = `schedule/${payload.id}`;

  const data = {
    idFaculty: payload.faculty,
    opening: payload.opening,
    closed: payload.closed,
  };

  const response = await putFetcher(url, data);

  return response;
};

export const DeleteSchedule = async (payload) => {
  const url = `schedule/${payload.id}`;

  const response = await deleteFetcher(url);

  return response;
};
