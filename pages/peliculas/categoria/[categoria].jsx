import contentful from "../../api/contentful";
import Head from "next/head";
import MainLayout from "../../../layouts/MainLayout";
import Card from "../../../components/Card";
import { Flex, Heading, Divider, Box, Text } from "@chakra-ui/react";

export async function getStaticPaths() {
  const allCategoriesPeliculas = await contentful.getCategoriesPeliculas();
  const data = allCategoriesPeliculas;
  const categorias = [];

  console.log(data);

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
  const allDataPeliculas = await contentful.getPeliculasByCategory(
    params.categoria
  );
  const data = allDataPeliculas;

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
  return (
    <>
      <Head>
        <title>{`Peliculas`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Heading as={"h2"} textAlign="center" pb="20px">
          Peliculas
        </Heading>
        <Divider />
        <Box px="20px">
          <Text my="3">Número de registros: {data.total}</Text>
          <Flex align={"center"} justify="center" wrap={"wrap"}>
            <Card props={data} path="peliculas" />
          </Flex>
        </Box>
      </MainLayout>
    </>
  );
};

export default CategoryPage;
