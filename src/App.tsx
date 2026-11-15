import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/ui/PlatformSelector";
import type { GameQuery } from "./hooks/useGames";

function App() {
  const [query, setQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
  });

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
        <PlatformSelector
          selectedPlatform={query.platform}
          onSelectPlatform={(platformId: number | null) =>
            setQuery({ ...query, platform: platformId })
          }
        />
        <GameGrid query={query} />
      </GridItem>
    </Grid>
  );
}

export default App;
