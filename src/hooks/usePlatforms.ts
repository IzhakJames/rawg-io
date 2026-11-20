import { useDataV2 } from "./useData";
import type { Platform } from "./useGames";

const usePlatforms = () => useDataV2<Platform>("/platforms/lists/parents");

export default usePlatforms;
