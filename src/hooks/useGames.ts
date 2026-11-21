import type { Genre } from "@/hooks/useGenres";
import type { Platform } from "@/hooks/usePlatforms";
import ApiClient from "@/services/api-client";
import { ONE_MINUTE } from "@/utils/time";
import { useInfiniteQuery } from "@tanstack/react-query";

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
  useInfiniteQuery({
    queryKey: ["games", query],
    queryFn: ({ signal, pageParam }) =>
      gamesClient.getAll({
        params: {
          genres: query.genre?.id,
          parent_platforms: query.platform?.id,
          ordering: query.ordering,
          search: query.search,
          page: pageParam,
        },
        signal,
      }),
    staleTime: ONE_MINUTE,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
