import usePlatforms from "@/hooks/usePlatforms";

// Looks up one platform from the cached platform list, so no extra request is made
const usePlatform = (id: number | null) => {
  const { data } = usePlatforms();
  return data?.results.find((platform) => platform.id === id);
};

export default usePlatform;
