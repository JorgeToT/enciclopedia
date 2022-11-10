import { Flex, Link, Heading, useColorMode, Box } from "@chakra-ui/react";

const Card = (data) => {
  const { colorMode } = useColorMode();
  data = data.props.items.map((juego) => {
    return (
      <Link
        href={"/" + data.path + "/" + juego.slug}
        key={juego.slug}
        _hover={{ textDecor: "none" }}
      >
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          p="10px"
          w="20vw"
          h="15vw"
          m="10px 20px"
          borderRadius="20px"
          bg={colorMode === "light" ? "darkslateblue" : "lightyellow"}
          color={colorMode === "light" ? "white" : "black"}
          _hover={
            colorMode === "light"
              ? {
                  transform: "scale(1.01)",
                  shadow: "0 0 5px darkslateblue",
                }
              : {
                  transform: "scale(1.01)",
                  shadow: "0 0 5px lightyellow",
                }
          }
        >
          <Box borderBottom={"2px"} w="100%">
            <Heading textAlign={"center"} as="h3" fontSize={"larger"} m="20px">
              {juego.titulo}
            </Heading>
          </Box>
          <Box borderRadius="10px" objectFit="cover" m="20px">
            <img src={juego.img.url} alt={juego.titulo} />
          </Box>
        </Flex>
      </Link>
    );
  });
  return (
    <Flex align={"center"} justify="center" wrap={"wrap"}>
      {data}
    </Flex>
  );
};

export default Card;
