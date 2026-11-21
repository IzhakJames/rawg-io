import { Badge, Portal, Tooltip } from "@chakra-ui/react";

// Metacritic's own score bands, highest first
const scoreBands = [
  { min: 90, label: "Universal acclaim" },
  { min: 75, label: "Generally favorable reviews" },
  { min: 50, label: "Mixed or average reviews" },
  { min: 20, label: "Generally unfavorable reviews" },
  { min: 0, label: "Overwhelming dislike" },
];

const getScoreLabel = (score: number) =>
  scoreBands.find((band) => score >= band.min)?.label ?? "";

interface Props {
  metacritic: number | null;
}

function CriticScore({ metacritic }: Props) {
  if (metacritic === null) return null;

  const color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "gray";
  const description = `Metacritic score: ${metacritic}/100 – ${getScoreLabel(metacritic)}`;

  return (
    <Tooltip.Root openDelay={200}>
      <Tooltip.Trigger asChild>
        <Badge
          fontSize={"14px"}
          paddingX={2}
          borderRadius={"4px"}
          colorPalette={color}
          tabIndex={0}
          cursor="help"
          aria-label={description}
        >
          {metacritic}
        </Badge>
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            {description}
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  );
}

export default CriticScore;
