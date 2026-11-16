import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchQuery: string) => void;
}

function SearchBar({ onSearch }: Props) {
  const searchQuery = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ flex: 1 }}
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(searchQuery.current?.value.trim() ?? "");
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          borderRadius={20}
          placeholder="Search Games.."
          variant={"subtle"}
          ref={searchQuery}
        />
      </InputGroup>
    </form>
  );
}

export default SearchBar;
