import { Button, Grid, GridItem, Heading, HStack } from "@chakra-ui/react";
import NavBar from "@/components/ui/NavBar";
import GameGrid from "@/components/ui/GameGrid";
import GenreList from "@/components/ui/GenreList";
import { useState } from "react";
import PlatformSelector from "@/components/ui/PlatformSelector";
import type { GameQuery } from "@/hooks/useGames";
import SortSelector from "@/components/ui/SortSelector";
import GamesHeading from "./components/ui/GamesHeading";

const initialQuery: GameQuery = {
  genreId: null,
  platformId: null,
  ordering: "",
  search: "",
};

function App() {
  const [query, setQuery] = useState<GameQuery>(initialQuery);
  const hasFilters = query.genreId !== null || query.platformId !== null;

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(search) => setQuery({ ...query, search })} />
      </GridItem>
      <GridItem area="aside" hideBelow="lg" paddingX={5}>
        <Heading padding={1}>Genre</Heading>
        <GenreList
          selectedGenreId={query.genreId}
          onSelectGenre={(genreId) => setQuery({ ...query, genreId })}
        />
      </GridItem>
      <GridItem area="main">
        <GamesHeading platformId={query.platformId} genreId={query.genreId} />
        <HStack>
          <PlatformSelector
            selectedPlatformId={query.platformId}
            onSelectPlatform={(platform) =>
              setQuery({ ...query, platformId: platform })
            }
          />
          <SortSelector
            ordering={query.ordering}
            onSelectSorting={(ordering) => setQuery({ ...query, ordering })}
          />
          <Button
            disabled={!hasFilters}
            onClick={() =>
              setQuery({ ...query, genreId: null, platformId: null })
            }
            variant={"ghost"}
          >
            Clear Filters
          </Button>
        </HStack>
        <GameGrid query={query} />
      </GridItem>
    </Grid>
  );
}

export default App;
