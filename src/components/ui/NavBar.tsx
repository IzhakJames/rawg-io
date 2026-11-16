import { HStack, Image } from "@chakra-ui/react";

import logo from "@/assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  onSearch: (searchQuery: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack justifyContent="space-between" paddingX={4}>
      <Image src={logo} boxSize="60px" />
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
