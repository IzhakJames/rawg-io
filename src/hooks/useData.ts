import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";

interface DataResponse<T> {
  count: number;
  results: T[];
}

export const ONE_MINUTE = 60 * 1000;
export const ONE_DAY = 24 * 60 * ONE_MINUTE;

const useData = <T>(
  endpoint: string,
  config?: AxiosRequestConfig,
  staleTime = ONE_MINUTE,
) =>
  useQuery<DataResponse<T>, Error>({
    queryKey: [endpoint, config],
    queryFn: ({ signal }) =>
      apiClient
        .get<DataResponse<T>>(endpoint, { ...config, signal })
        .then((res) => res.data),
    staleTime,
  });

export default useData;
