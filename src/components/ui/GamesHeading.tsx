import useGenres from "@/hooks/useGenres";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
  platformId: number | null;
  genreId: number | null;
}

function GamesHeading({ platformId, genreId }: Props) {
  const platform = usePlatform(platformId);

  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === genreId);

  const heading = [platform?.name, genre?.name, "Games"]
    .filter(Boolean)
    .join(" ");

  return (
    <Heading as="h1" fontSize={"4xl"} padding={2} marginBottom={2}>
      {heading}
    </Heading>
  );
}

export default GamesHeading;
