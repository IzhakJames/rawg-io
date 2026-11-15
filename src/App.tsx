import { Button, Grid, GridItem, Heading, HStack } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/ui/PlatformSelector";
import type { GameQuery } from "./hooks/useGames";

const initialQuery: GameQuery = { genre: null, platform: null };

function App() {
  const [query, setQuery] = useState<GameQuery>(initialQuery);
  const hasFilters = query.genre !== null || query.platform !== null;

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
        <NavBar />
      </GridItem>
      <GridItem area="aside" hideBelow="lg" paddingX={5}>
        <GenreList
          selectedGenre={query.genre}
          onSelectGenre={(genreId: number | null) =>
            setQuery({ ...query, genre: genreId })
          }
        />
      </GridItem>
      <GridItem area="main">
        <Heading as="h1" fontSize={"4xl"} padding={2} marginBottom={2}>
          Games
        </Heading>
        <HStack>
          <PlatformSelector
            selectedPlatform={query.platform}
            onSelectPlatform={(platformId: number | null) =>
              setQuery({ ...query, platform: platformId })
            }
          />
          <Button
            disabled={!hasFilters}
            onClick={() => setQuery(initialQuery)}
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
