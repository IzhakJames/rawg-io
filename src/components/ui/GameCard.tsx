import type { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/utils/crop-image";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root height="full">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        aspectRatio={3 / 2}
        objectFit="cover"
        width="full"
        loading="lazy"
      />
      <Card.Body>
        <Card.Title as="h2">{game.name}</Card.Title>

        <HStack justifyContent={"space-between"} marginTop="auto">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore metacritic={game.metacritic} />
        </HStack>
        <Emoji rating={game.rating_top} />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
