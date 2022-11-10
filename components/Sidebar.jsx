import ColorModeButton from "./ColorModeButton";
import { Box, Heading, Flex, Button, Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box h="100vh" w="20vw" p="20px">
      <Flex direction={"column"}>
        <Box>
          <ColorModeButton />
          <Link href="/" _hover={{ textDecor: "none" }}>
            <Heading as={"h1"} size="lg" my="20px" textAlign={"center"}>
              TO SEE
            </Heading>
          </Link>
        </Box>
        <Link href="/juegos" _hover={{ textDecor: "none" }} mb="20px">
          <Button colorScheme="blue" w="100%">
            Videojuegos
          </Button>
        </Link>
        <Link href="/peliculas" _hover={{ textDecor: "none" }} mb="20px">
          <Button colorScheme="blue" w="100%">
            Películas
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Sidebar;
