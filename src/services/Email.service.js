import { useQuery } from "@tanstack/react-query";
import { getFetchcer } from "../utils/axios";

export const GetEmail = (props) => {
  const { subject, faculty, page, limit } = props;
  const url = `email?subject=${subject}&faculty=${faculty}&page=${page}&limit=${limit}`;

  const { data, ...others } = useQuery({
    queryKey: [subject, faculty, page, limit],
    queryFn: async () => await getFetchcer(url),
  });

  return { data, ...others };
};
