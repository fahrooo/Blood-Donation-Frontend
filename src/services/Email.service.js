import { useQuery } from "@tanstack/react-query";
import { deleteFetcher, getFetchcer, postFetcher } from "../utils/axios";

export const GetEmail = (props) => {
  const { subject, faculty, page, limit } = props;
  const url = `email?subject=${subject}&faculty=${faculty}&page=${page}&limit=${limit}`;

  const { data, ...others } = useQuery({
    queryKey: [subject, faculty, page, limit],
    queryFn: async () => await getFetchcer(url),
  });

  return { data, ...others };
};

export const getEmailById = async (id) => {
  const url = `email/${id}`;

  const response = await getFetchcer(url);

  return response;
};

export const PostEmail = async (payload) => {
  const url = "email";

  const data = {
    idFaculty: payload.faculty,
    subject: payload.subject,
    message: payload.message,
  };

  const response = await postFetcher(url, data);

  return response;
};

export const DeleteEmail = async (payload) => {
  const url = `email/${payload.id}`;

  const response = await deleteFetcher(url);

  return response;
};

export const SendEmail = async (payload) => {
  const url = "email/send";

  const data = {
    toEmail: payload.toEmail,
    subject: payload.subject,
    message: payload.message,
  };

  const response = await postFetcher(url, data);

  return response;
};
