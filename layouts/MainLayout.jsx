import Sidebar from "../components/Sidebar";
import { Flex, Box, Divider, Center } from "@chakra-ui/react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Flex direction="row">
        <Sidebar />
        <Center height="100vh">
          <Divider orientation="vertical" />
        </Center>
        <Box py={"20px"} w="80vw">
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default MainLayout;
