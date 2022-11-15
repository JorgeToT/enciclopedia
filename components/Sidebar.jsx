import { Box, Heading, Flex, Link } from "@chakra-ui/react";
import ColorModeButton from "./ColorModeButton";
import SidebarButton from "./SidebarButton";
import contentful from "../pages/api/contentful";

export async function getStaticProps() {
  const allCategoriesPeliculas = await contentful.getCategoriesPeliculas();
  const data = allCategoriesPeliculas;
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

const Sidebar = ({ data }) => {
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
        <SidebarButton props={{ ruta: "juegos", nombre: "Juegos" }} />
        <SidebarButton props={{ ruta: "peliculas", nombre: "Películas" }} />
      </Flex>
    </Box>
  );
};

export default Sidebar;
