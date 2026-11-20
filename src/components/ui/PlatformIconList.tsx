import type { Platform } from "@/hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaAndroid,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch, BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: Record<string, IconType | undefined> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack gap="2">
      {platforms.map((p) => {
        const PlatformIcon = iconMap[p.slug];
        if (!PlatformIcon) return null;

        return (
          <Icon key={p.id} asChild color="gray.500">
            <PlatformIcon role="img" aria-label={p.name} />
          </Icon>
        );
      })}
    </HStack>
  );
}

export default PlatformIconList;
