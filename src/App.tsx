import { useEffect, useState } from "react";
import apiClient from "./services/api-client";
import { CanceledError } from "axios";
import { Grid, GridItem, List } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";

interface GameDataResponse {
  count: number;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
  slug: string;
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GameDataResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (!(err instanceof CanceledError)) setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" bg="gold" hideBelow="lg">
        Aside
      </GridItem>
      <GridItem area="main">
        <List.Root>
          {games.map((g) => (
            <List.Item key={g.id}>{g.name}</List.Item>
          ))}
        </List.Root>
      </GridItem>
    </Grid>
  );
}

export default App;
