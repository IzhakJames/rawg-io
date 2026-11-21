import axios, { type AxiosRequestConfig } from "axios";

interface DataResponse<T> {
  count: number;
  results: T[];
}

export const ONE_MINUTE = 60 * 1000;
export const ONE_DAY = 24 * 60 * ONE_MINUTE;

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2a01ff30c2b24b798f2b09b55b6679ed",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<DataResponse<T>>(this.endpoint, { ...config })
      .then((res) => res.data);

  get = (id: number | string) =>
    axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);
}

export default ApiClient;
