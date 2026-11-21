import ApiClient, { ONE_DAY } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const platformClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: ({ signal }) => platformClient.getAll({ signal }),
    staleTime: ONE_DAY,
  });

export default usePlatforms;
