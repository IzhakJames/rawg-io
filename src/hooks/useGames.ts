import useData from "@/hooks/useData";
import type { Genre } from "@/hooks/useGenres";
import type { Platform } from "@/hooks/usePlatforms";

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

const useGames = (query: GameQuery) =>
  useData<Game>("/games", {
    params: {
      genres: query.genre?.id,
      parent_platforms: query.platform?.id,
      ordering: query.ordering,
      search: query.search,
    },
  });

export default useGames;
