import { useDataV2 } from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string | null;
}

const useGenres = () => useDataV2<Genre>("/genres");

export default useGenres;
