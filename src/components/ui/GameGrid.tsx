import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  return (
    <>
      {isLoading && <Text>LOADING....</Text>}
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
        gap={{ base: 4, md: 6 }}
      >
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
