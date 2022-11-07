import { Box, Heading, Image } from "@chakra-ui/react";
import MainLayout from "../../layouts/MainLayout";
import contentful from "../api/contentful";

export async function getStaticProps() {
  const allDataCardJuegos = await contentful.getDataCardJuegos();
  const items = allDataCardJuegos.productCollection;

  return {
    props: {
      items,
    },
  };
}

const Index = ({ items }) => {
  const juegos = items.items.map((juego) => {
    return (
      <Box
        key={juego.slug}
        p="10px"
        w="60vw"
        border={"1px solid black"}
        m="10px"
        borderRadius="20px"
      >
        <Heading textAlign={"center"} as="h3" fontSize={"2s"} m="2">
          {juego.titulo}
        </Heading>
        <Image
          src={juego.tituloImg.url}
          alt={juego.titulo}
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
        />
      </Box>
    );
  });
  return (
    <MainLayout>
      <Heading as={"h2"} textAlign="center">
        Videojuegos
      </Heading>
      Número de juegos: {items.total}
      <Box>{juegos}</Box>
    </MainLayout>
  );
};

export default Index;
