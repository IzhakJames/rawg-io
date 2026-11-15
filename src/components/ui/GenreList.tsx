import useGenres from "@/hooks/useGenres";
import { Link, List } from "@chakra-ui/react";

function GenreList() {
  const { genres } = useGenres();
  return (
    <List.Root padding={2}>
      {genres.map((g) => (
        <List.Item as={Link} key={g.id}>
          {g.name}
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
