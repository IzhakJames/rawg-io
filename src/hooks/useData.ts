import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface DataResponse<T> {
  count: number;
  results: T[];
}

export const useDataV2 = <T>(endpoint: string, config?: AxiosRequestConfig) =>
  useQuery<DataResponse<T>, Error>({
    queryKey: [endpoint, config],
    queryFn: ({ signal }) =>
      apiClient
        .get<DataResponse<T>>(endpoint, { ...config, signal })
        .then((res) => res.data),
    staleTime: 60 * 1000,
  });

const useData = <T>(
  endpoint: string,
  config?: AxiosRequestConfig,
  deps?: unknown[],
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    () => {
      const controller = new AbortController();
      apiClient
        .get<DataResponse<T>>(endpoint, {
          ...config,
          signal: controller.signal,
        })
        .then((res) => {
          setData(res.data.results);
          setError("");
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      return () => controller.abort();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [...deps] : [],
  );

  return { data, error, isLoading };
};

export default useData;
