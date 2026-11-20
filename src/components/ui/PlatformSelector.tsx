import type { Platform } from "@/hooks/usePlatforms";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
}

function PlatformSelector({ selectedPlatform, onSelectPlatform }: Props) {
  const { data, error } = usePlatforms();

  if (error || !data) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" padding={2} marginX={2}>
          {selectedPlatform?.name ?? "Platforms"} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.results.map((p) => (
              <Menu.Item
                fontWeight={p.id === selectedPlatform?.id ? "bold" : "normal"}
                onSelect={() => onSelectPlatform(p)}
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
