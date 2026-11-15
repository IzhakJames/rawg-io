import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function GameGrid() {
  const { games, error, isLoading } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
        gap={{ base: 4, md: 6 }}
      >
        {isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
