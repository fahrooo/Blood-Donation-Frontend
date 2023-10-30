import axios from "axios";

axios.defaults.withCredentials = true;

// const axiosInstance = axios.create({
//   baseURL: "http://127.0.0.1:5174/",
// });
const axiosInstance = axios.create({
  baseURL: "http://103.155.246.50:5174/",
});

export const getFetchcer = (resource, init) =>
  axiosInstance
    .get(resource, init)
    .then((res) => res.data)
    .catch((err) => err.response);

export const postFetcher = (resource, init) =>
  axiosInstance.post(resource, init).then((res) => res.data);

export const putFetcher = (resource, init) =>
  axiosInstance.put(resource, init).then((res) => res.data);

export const deleteFetcher = (resource, init) =>
  axiosInstance.delete(resource, init).then((res) => res.data);

export default axiosInstance;
