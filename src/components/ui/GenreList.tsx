import useGenres from "@/hooks/useGenres";
import { List } from "@chakra-ui/react";

function GenreList() {
  const { data } = useGenres();
  return (
    <List.Root padding={2}>
      {data.map((g) => (
        <List.Item key={g.id}>{g.name}</List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
