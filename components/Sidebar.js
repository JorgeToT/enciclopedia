import ColorModeButton from "./ColorModeButton";
import { Box, Heading, Flex, Button, Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box border="1px solid black" h="100vh" w="20vw" p="10px">
      <Flex direction={"column"}>
        <Box mb="20px">
          <ColorModeButton />
          <Link href="/">
            <Heading as={"h1"} size="lg">
              Enciclopedia
            </Heading>
          </Link>
        </Box>
        <Link href="/juego">
          <Button colorScheme="blue" w="100%">
            Videojuegos
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Sidebar;
