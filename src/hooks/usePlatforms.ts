import useData, { ONE_DAY } from "./useData";
import type { Platform } from "./useGames";

const usePlatforms = () =>
  useData<Platform>("/platforms/lists/parents", undefined, ONE_DAY);

export default usePlatforms;
