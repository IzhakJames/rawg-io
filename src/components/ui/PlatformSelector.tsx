import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedPlatformId: number | null;
  onSelectPlatform: (platformId: number | null) => void;
}

function PlatformSelector({ selectedPlatformId, onSelectPlatform }: Props) {
  const { data, error } = usePlatforms();

  if (error || !data) return null;

  const selectedPlatformName = data.results.find(
    (p) => p.id === selectedPlatformId,
  );
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" padding={2} marginX={2}>
          {selectedPlatformName?.name ?? "Platforms"} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.results.map((p) => (
              <Menu.Item
                fontWeight={p.id === selectedPlatformId ? "bold" : "normal"}
                onSelect={() => onSelectPlatform(p.id)}
                value={p.slug}
                key={p.id}
              >
                {p.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;
