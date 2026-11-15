import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  config?: AxiosRequestConfig,
  deps?: any[],
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
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : [],
  );

  return { data, error, isLoading };
};

export default useData;
