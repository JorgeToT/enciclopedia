import { Heading, Flex, Text, Box, Divider } from "@chakra-ui/react";
import MainLayout from "../../layouts/MainLayout";
import contentful from "../api/contentful";
import Card from "../../components/Card";
import Head from "next/head";

export async function getStaticProps() {
  const allDataCardJuegos = await contentful.getDataCardJuegos();
  const data = allDataCardJuegos;

  return {
    props: {
      data,
    },
  };
}

const Index = ({ data }) => {
  return (
    <>
      <Head>
        <title>Juegos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Heading as={"h2"} textAlign="center" pb="20px">
          Videojuegos
        </Heading>
        <Divider />
        <Box px="20px">
          <Text my="3">Número de registros: {data.total}</Text>
          <Flex align={"center"} justify="center" wrap={"wrap"}>
            <Card props={data} path="juegos" />
          </Flex>
        </Box>
      </MainLayout>
    </>
  );
};

export default Index;
