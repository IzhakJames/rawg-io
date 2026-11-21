import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2a01ff30c2b24b798f2b09b55b6679ed",
  },
});

class ApiClient<T> {
  private readonly endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);

  get = (id: number | string, config?: AxiosRequestConfig) =>
    axiosInstance
      .get<T>(`${this.endpoint}/${id}`, config)
      .then((res) => res.data);
}

export default ApiClient;
