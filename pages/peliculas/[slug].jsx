import contentful from "../api/contentful";
import { Text, Box, Flex, Image, Link, Heading } from "@chakra-ui/react";
import MainLayout from "../../layouts/MainLayout";

export async function getStaticPaths() {
  const allSlugPeliculas = await contentful.getSlugPeliculas();
  const data = allSlugPeliculas;
  const paths = data.items.map((item) => {
    return {
      params: {
        slug: item.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allDataPelicula = await contentful.getDataPelicula(params.slug);
  const data = allDataPelicula;

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}

const MoviePage = ({ data }) => {
  data = data.items[0];
  console.log(data);
  return (
    <MainLayout>
      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Heading as="h1" fontSize={"4xl"} mb="20px">
          {data.titulo}
        </Heading>
        <Divider />
        <Box w="500px" mt="20px">
          <img src={data.img.url} alt={data.titulo}></img>
        </Box>
      </Flex>
    </MainLayout>
  );
};

export default MoviePage;
