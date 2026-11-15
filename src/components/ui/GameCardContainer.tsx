import { Box } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

function GameCardContainer({ children }: PropsWithChildren) {
  return (
    <Box overflow="hidden" borderRadius={10}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
