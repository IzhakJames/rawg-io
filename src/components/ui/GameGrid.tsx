import useGames from "@/hooks/useGames";
import { List, Text } from "@chakra-ui/react";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  return (
    <>
      {isLoading && <Text>LOADING....</Text>}
      {error && <Text>{error}</Text>}
      <List.Root>
        {games.map((g) => (
          <List.Item key={g.id}>{g.name}</List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GameGrid;
