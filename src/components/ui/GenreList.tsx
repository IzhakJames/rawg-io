import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/utils/crop-image";
import { Button, HStack, Image, List } from "@chakra-ui/react";
import GenreListSkeleton from "@/components/ui/GenreListSkeleton";

interface Props {
  selectedGenreId: number | null;
  onSelectGenre: (genreId: number | null) => void;
}

function GenreList({ selectedGenreId, onSelectGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <GenreListSkeleton />;
  if (error || !data) return null;

  return (
    <List.Root variant="plain">
      {data.results.map((g) => (
        <List.Item key={g.id} padding={1}>
          <HStack>
            <Image
              src={getCroppedImageUrl(g.image_background)}
              boxSize="38px"
              borderRadius={8}
              objectFit="cover"
            />
            <Button
              fontWeight={g.id === selectedGenreId ? "bold" : "normal"}
              onClick={() => {
                onSelectGenre(g.id === selectedGenreId ? null : g.id);
              }}
              variant="ghost"
              whiteSpace="normal"
              height="auto"
              textAlign="left"
              paddingX={1}
              flexShrink={1}
            >
              {g.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
