import Head from "next/head";
import Layout from "../layouts/MainLayout";
import { Flex, Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Flex justify={"center"} align="center" h="100%">
        <Heading as={"h1"} fontSize="4xl">
          TO SEE
        </Heading>
      </Flex>
    </Layout>
  );
}
