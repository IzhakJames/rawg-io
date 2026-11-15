import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card.Root>
      <Skeleton aspectRatio={3 / 2} width="full" />
      <Card.Body>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkeleton;
