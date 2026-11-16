import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-released", label: "Released Date" },
  { value: "name", label: "Name" },
  { value: "-added", label: "Date Added" },
  { value: "-created", label: "Date Created" },
  { value: "-updated", label: "Date Updated" },
  { value: "-rating", label: "Rating" },
  { value: "-metacritic", label: "Critic Score" },
];

interface Props {
  ordering: string;
  onSelectSorting: (orderBy: string) => void;
}

function SortSelector({ ordering, onSelectSorting }: Props) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" padding={2} marginX={2}>
          Order By:{" "}
          {sortOrders.find((o) => o.value === ordering)?.label ?? "Relevance"}{" "}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                key={order.value}
                value={order.value}
                onSelect={() => onSelectSorting(order.value)}
                fontWeight={order.value === ordering ? "bold" : "normal"}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;
