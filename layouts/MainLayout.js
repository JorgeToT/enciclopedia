import Sidebar from "../components/Sidebar";
import { Flex, Box } from "@chakra-ui/react";

const MainLayout = ({ children }) => {
  return (
    <Flex direction="row">
      <Sidebar />
      <Box p={"10px"}>{children}</Box>
    </Flex>
  );
};

export default MainLayout;
