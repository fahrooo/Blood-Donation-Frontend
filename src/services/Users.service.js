import { useQuery } from "@tanstack/react-query";
import { getFetchcer } from "../utils/axios";

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
