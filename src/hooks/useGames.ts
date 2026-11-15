import useData from "./useData";

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

const useGames = (selectedGenre: number | null) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre,
      },
    },
    [selectedGenre],
  );

export default useGames;
