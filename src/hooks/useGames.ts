import useData from "./useData";

export interface GameQuery {
  genre: number | null;
  platform: number | null;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string | null;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (query: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: query.genre,
        parent_platforms: query.platform,
      },
    },
    [query],
  );

export default useGames;
