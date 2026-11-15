import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/utils/crop-image";
import { Button, HStack, Image, List } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenre: number | null;
  onSelectGenre: (g: number | null) => void;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <GenreListSkeleton />;
  return (
    <List.Root variant="plain">
      {data.map((g) => (
        <List.Item key={g.id} padding={1}>
          <HStack>
            <Image
              src={getCroppedImageUrl(g.image_background)}
              boxSize="38px"
              borderRadius={8}
              objectFit="cover"
            />
            <Button
              fontWeight={g.id === selectedGenre ? "bold" : "normal"}
              onClick={() => {
                onSelectGenre(g.id === selectedGenre ? null : g.id);
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
