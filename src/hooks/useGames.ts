import type { Genre } from "@/hooks/useGenres";
import type { Platform } from "@/hooks/usePlatforms";
import ApiClient, { ONE_MINUTE } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  search: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string | null;
  parent_platforms: { platform: Platform }[];
  metacritic: number | null;
  rating_top: number;
}

const gamesClient = new ApiClient<Game>("/games");

const useGames = (query: GameQuery) =>
  useQuery({
    queryKey: ["games", query],
    queryFn: ({ signal }) =>
      gamesClient.getAll({
        params: {
          genres: query.genre?.id,
          parent_platforms: query.platform?.id,
          ordering: query.ordering,
          search: query.search,
        },
        signal,
      }),
    staleTime: ONE_MINUTE,
  });

export default useGames;
