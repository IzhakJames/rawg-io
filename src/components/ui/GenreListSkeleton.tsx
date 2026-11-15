import { HStack, List, Skeleton, SkeletonText } from "@chakra-ui/react";

function GenreListSkeleton() {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <List.Root variant="plain">
      {skeletons.map((s) => (
        <List.Item key={s} padding={1}>
          <HStack>
            <Skeleton boxSize="38px" borderRadius={8} />
            <SkeletonText noOfLines={1} flex="1" />
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreListSkeleton;
