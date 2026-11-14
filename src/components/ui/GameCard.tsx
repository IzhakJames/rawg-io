import type { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root overflow="hidden">
      <Image
        src={game.background_image}
        alt={game.name}
        aspectRatio={16 / 9}
        objectFit="cover"
        width="full"
        loading="lazy"
      />
      <Card.Body>
        <Card.Title as="h2">{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
