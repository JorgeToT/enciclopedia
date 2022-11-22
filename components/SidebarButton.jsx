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

const SidebarButton = ({ props }) => {
  const BotonCategoria = props.data.map((item) => {
    return (
      <Link href={`/${props.ruta}/categoria/${item}`} key={item}>
        <Button size="sm" width="100%" m="1" colorScheme="blue">
          {item}
        </Button>
      </Link>
    );
  });
  return (
    <Link href={`/${props.ruta}`} mb="20px">
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
              {BotonCategoria}
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Link>
  );
};

export default SidebarButton;
