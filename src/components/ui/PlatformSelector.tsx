import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function PlatformSelector() {
  const { data } = usePlatforms();
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" padding={2} marginX={2}>
          Platforms <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((p) => (
              <Menu.Item value={p.slug} key={p.id}>
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
