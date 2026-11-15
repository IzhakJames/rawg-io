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

const useGames = (
  selectedGenre: number | null,
  selectedPlatform: number | null,
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre,
        parent_platforms: selectedPlatform,
      },
    },
    [selectedGenre, selectedPlatform],
  );

export default useGames;
