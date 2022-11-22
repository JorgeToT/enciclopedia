import contentful from "../api/contentful";
import { Box, Flex, Heading, Divider } from "@chakra-ui/react";
import Head from "next/head";
import MainLayout from "../../layouts/MainLayout";

export async function getStaticPaths() {
  const allSlugJuegos = await contentful.getSlugJuegos();
  const data = allSlugJuegos;

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
  const allDataJuego = await contentful.getDataJuego(params.slug);
  const data = allDataJuego;

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

const GamePage = ({ data }) => {
  data = data.items[0];
  return (
    <>
      <Head>
        <title>{data.titulo}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
};

export default GamePage;
