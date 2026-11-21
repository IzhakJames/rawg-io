import ApiClient from "@/services/api-client";
import { ONE_DAY } from "@/utils/time";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string | null;
}

const genreClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: ({ signal }) => genreClient.getAll({ signal }),
    staleTime: ONE_DAY,
  });

export default useGenres;
