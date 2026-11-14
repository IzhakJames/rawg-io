import { useEffect, useState } from "react";
import apiClient from "./services/api-client";
import { CanceledError } from "axios";
import { Button, HStack } from "@chakra-ui/react";

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
    <>
      {error && <h1>{error}</h1>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
}

export default App;
