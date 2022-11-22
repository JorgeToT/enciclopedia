import { Box, Heading, Flex, Link, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ColorModeButton from "./ColorModeButton";
import SidebarButton from "./SidebarButton";

const query = `
{
  productCollection {
    items {
      categoria
    }
  }
  moviesCollection {
    items {
      categoria
    }
  }
}
`;

const Sidebar = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CF_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setLoading(false);
        setPage(data);
      });
  }, []);

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  const categorias = {
    Videojuegos: {
      ruta: "juegos",
      nombre: "Videojuegos",
      data: [],
    },
    Películas: {
      ruta: "peliculas",
      nombre: "Películas",
      data: [],
    },
  };

  for (let i = 0; i < page?.productCollection?.items.length; i++) {
    for (
      let j = 0;
      j < page?.productCollection?.items[i]?.categoria.length;
      j++
    ) {
      categorias.Videojuegos.data.push(
        page.productCollection.items[i].categoria[j]
      );
    }
  }

  for (let i = 0; i < page?.moviesCollection?.items.length; i++) {
    for (
      let j = 0;
      j < page?.moviesCollection?.items[i]?.categoria.length;
      j++
    ) {
      categorias.Películas.data.push(
        page.moviesCollection.items[i].categoria[j]
      );
    }
  }

  categorias.Videojuegos.data = removeDuplicates(categorias.Videojuegos.data);
  categorias.Películas.data = removeDuplicates(categorias.Películas.data);

  return (
    <Box h="100vh" w="20vw" p="20px">
      {loading ? (
        <Flex justifyContent={"center"} alignItems="center" h="100%">
          <Spinner />
        </Flex>
      ) : (
        <Flex direction={"column"}>
          <Box>
            <ColorModeButton />
            <Link href="/" _hover={{ textDecor: "none" }}>
              <Heading as={"h1"} size="lg" my="20px" textAlign={"center"}>
                TO SEE
              </Heading>
            </Link>
          </Box>
          <SidebarButton
            props={categorias.Videojuegos}
            key={categorias.Videojuegos.nombre}
          />
          <SidebarButton
            props={categorias.Películas}
            key={categorias.Películas.nombre}
          />
        </Flex>
      )}
    </Box>
  );
};

export default Sidebar;
