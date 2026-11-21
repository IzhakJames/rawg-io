import useGames from "@/hooks/useGames";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "@/components/ui/GameCard";
import GameCardSkeleton from "@/components/ui/GameCardSkeleton";
import GameCardContainer from "@/components/ui/GameCardContainer";
import type { GameQuery } from "@/hooks/useGames";
import { Fragment } from "react";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Props {
  query: GameQuery;
}

function GameGrid({ query }: Props) {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGames(query);
  if (error && !data) return <Text>{error.message}</Text>;
  return (
    <Box padding={2}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
        gap={{ base: 4, md: 6 }}
      >
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((g) => (
              <GameCardContainer key={g.id}>
                <GameCard game={g} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
        {(isLoading || isFetchingNextPage) &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          marginY={4}
          variant={"subtle"}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
}

export default GameGrid;
