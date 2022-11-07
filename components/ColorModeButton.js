import { useColorMode, Button, Icon } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button
        onClick={toggleColorMode}
        bg={colorMode === "light" ? "darkslateblue" : "lightyellow"}
        _hover={{
          bg: colorMode === "light" ? "darkslateblue" : "lightyellow",
          transform: "scale(1.1)",
        }}
        _active={{
          bg: colorMode === "light" ? "darkslateblue" : "lightyellow",
        }}
      >
        <Icon
          as={colorMode === "light" ? MoonIcon : SunIcon}
          color={colorMode === "light" ? "white" : "black"}
        />
      </Button>
    </header>
  );
}

export default ColorModeButton;
