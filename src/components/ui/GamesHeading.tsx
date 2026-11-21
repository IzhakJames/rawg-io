import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  platformId: number | null;
  genreId: number | null;
}

function GamesHeading({ platformId, genreId }: Props) {
  const { data: platformData } = usePlatforms();
  const platformName = platformData?.results.find(
    (platform) => platform.id === platformId,
  );

  const { data: genreData } = useGenres();
  const genreName = genreData?.results.find((genre) => genre.id === genreId);
  const heading = [platformName?.name, genreName?.name, "Games"]
    .filter(Boolean)
    .join(" ");
  return (
    <Heading as="h1" fontSize={"4xl"} padding={2} marginBottom={2}>
      {heading}
    </Heading>
  );
}

export default GamesHeading;
