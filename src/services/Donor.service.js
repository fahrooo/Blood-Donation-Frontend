import { useQuery } from "@tanstack/react-query";
import { getFetchcer } from "../utils/axios";

export const GetDonor = (props) => {
  const { name, faculty, page, limit } = props;
  const url = `donor?name=${name}&faculty=${faculty}&page=${page}&limit=${limit}`;

  const { data, ...others } = useQuery({
    queryKey: [name, faculty, page, limit],
    queryFn: async () => await getFetchcer(url),
  });

  return { data, ...others };
};
