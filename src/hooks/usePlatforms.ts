import useData, { ONE_DAY } from "@/hooks/useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useData<Platform>("/platforms/lists/parents", undefined, ONE_DAY);

export default usePlatforms;
