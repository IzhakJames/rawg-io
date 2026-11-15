import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/utils/crop-image";
import { HStack, Image, List, Text } from "@chakra-ui/react";

function GenreList() {
  const { data } = useGenres();
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
            <Text>{g.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
