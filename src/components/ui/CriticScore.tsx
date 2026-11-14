import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

function CriticScore({ metacritic }: Props) {
  const color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "gray";
  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
      colorPalette={color}
    >
      {metacritic}
    </Badge>
  );
}

export default CriticScore;
