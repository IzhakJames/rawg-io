import { Button, Grid, GridItem, Heading, HStack } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/ui/PlatformSelector";
import type { GameQuery } from "./hooks/useGames";
import SortSelector from "./components/ui/SortSelector";

const initialQuery: GameQuery = {
  genre: null,
  platform: null,
  ordering: "",
  search: "",
};

function App() {
  const [query, setQuery] = useState<GameQuery>(initialQuery);
  const hasFilters = query.genre !== null || query.platform !== null;
  const heading = [query.platform?.name, query.genre?.name, "Games"]
    .filter(Boolean)
    .join(" ");

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
          selectedGenre={query.genre}
          onSelectGenre={(genre) => setQuery({ ...query, genre })}
        />
      </GridItem>
      <GridItem area="main">
        <Heading as="h1" fontSize={"4xl"} padding={2} marginBottom={2}>
          {heading}
        </Heading>
        <HStack>
          <PlatformSelector
            selectedPlatform={query.platform}
            onSelectPlatform={(platform) => setQuery({ ...query, platform })}
          />
          <SortSelector
            ordering={query.ordering}
            onSelectSorting={(ordering) => setQuery({ ...query, ordering })}
          />
          <Button
            disabled={!hasFilters}
            onClick={() =>
              setQuery({ ...query, genre: null, platform: null })
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
