import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/hooks/useGames";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Props {
  query: GameQuery;
}

function GameGrid({ query }: Props) {
  const { data, error, isLoading } = useGames(query);
  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
      gap={{ base: 4, md: 6 }}
      padding={2}
    >
      {isLoading &&
        skeletons.map((s) => (
          <GameCardContainer key={s}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.results.map((g) => (
        <GameCardContainer key={g.id}>
          <GameCard game={g} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
