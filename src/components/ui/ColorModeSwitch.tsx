import { Switch } from "@chakra-ui/react";
import { useTheme } from "next-themes";

function ColorModeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Switch.Root
      checked={resolvedTheme === "dark"}
      onCheckedChange={({ checked }) => setTheme(checked ? "dark" : "light")}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Dark mode</Switch.Label>
    </Switch.Root>
  );
}

export default ColorModeSwitch;
