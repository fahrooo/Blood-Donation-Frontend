import { useQuery } from "@tanstack/react-query";
import { getFetchcer } from "../utils/axios";

export const GetSchedule = (props) => {
  const { faculty, page, limit } = props;
  const url = `schedule?faculty=${faculty}&page=${page}&limit=${limit}`;

  const { data, ...others } = useQuery({
    queryKey: [faculty, page, limit],
    queryFn: async () => await getFetchcer(url),
  });

  return { data, ...others };
};
