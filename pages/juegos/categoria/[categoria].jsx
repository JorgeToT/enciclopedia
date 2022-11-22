import contentful from "../../api/contentful";
import Head from "next/head";
import MainLayout from "../../../layouts/MainLayout";
import Card from "../../../components/Card";
import { Flex, Heading, Divider, Box, Text } from "@chakra-ui/react";

export async function getStaticPaths() {
  const allCategoriesJuegos = await contentful.getCategoriesJuegos();
  const data = allCategoriesJuegos;
  const categorias = [];

  data.items.map((item) => {
    for (let i = 0; i < item.categoria.length; i++) {
      if (!categorias.includes(item.categoria[i])) {
        categorias.push(item.categoria[i]);
      }
    }
  });

  const paths = categorias.map((item) => {
    return {
      params: {
        categoria: item,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allDataJuego = await contentful.getJuegosByCategory(params.categoria);
  const data = {
    data: allDataJuego,
    params: params,
  };
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

const CategoryPage = ({ data }) => {
  const genero = data.params.categoria;
  data = data.data;
  return (
    <>
      <Head>
        <title>{`Juegos`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Heading as={"h2"} textAlign="center" pb="20px">
          Videojuegos
        </Heading>
        <Divider />
        <Box px="20px">
          <Text my="3">Número de registros: {data.total}</Text>
          <Text my="3">Género: {genero}</Text>
          <Flex align={"center"} justify="center" wrap={"wrap"}>
            <Card props={data} path="juegos" />
          </Flex>
        </Box>
      </MainLayout>
    </>
  );
};

export default CategoryPage;
