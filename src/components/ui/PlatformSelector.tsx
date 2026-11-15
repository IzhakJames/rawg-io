import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function PlatformSelector() {
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
            <Menu.Item value="item-1">Item 1</Menu.Item>
            <Menu.Item value="item-2">Item 2</Menu.Item>
            <Menu.Item value="item-3">Item 3</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;
