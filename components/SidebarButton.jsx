import {
  Link,
  Button,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/react";

const SidebarButton = ({props}) => {
  return (
    <Link href={`/${props.ruta}`} _hover={{ textDecor: "none" }} mb="20px">
      <Popover trigger="hover" placement="right">
        <PopoverTrigger>
          <Button colorScheme="blue" w="100%">
            {props.nombre}
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent role={"tooltip"}>
            <PopoverArrow />
            <PopoverBody display={"flex"} flexDirection="column">
              <Button colorScheme="blue" m="1"></Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Link>
  );
};

export default SidebarButton;
