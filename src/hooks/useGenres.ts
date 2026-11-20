import useData, { ONE_DAY } from "@/hooks/useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string | null;
}

const useGenres = () => useData<Genre>("/genres", undefined, ONE_DAY);

export default useGenres;
