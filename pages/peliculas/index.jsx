import { Heading, Flex, Text, Box, Divider } from "@chakra-ui/react";
import MainLayout from "../../layouts/MainLayout";
import contentful from "../api/contentful";
import Card from "../../components/Card";

export async function getStaticProps() {
  const allDataCardJuegos = await contentful.getDataCardPeliculas();
  const data = allDataCardJuegos;

  return {
    props: {
      data,
    },
  };
}

const Index = ({ data }) => {
  return (
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
  );
};

export default Index;
