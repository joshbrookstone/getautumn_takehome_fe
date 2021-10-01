import { Flex, Container, Grid, GridItem } from "@chakra-ui/react";
import CalenderStress from "../components/CalenderStress";
import Navbar from "../components/navbar/NavBar";

const Home = ({}) => {
  return (
    // <Grid h="">

    // </Grid>
    // <Container maxW="full" as={Flex} flexDir="column">
    //   <Navbar></Navbar>
    //   {/* <CalenderStress /> */}
    // </Container>
    <Grid
      height="100vh"
      templateRows="repeat(20, 1fr)"
      templateColumns="repeat(31, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={20} colSpan={2} bg="#F7F9FA">
        <Navbar />
      </GridItem>
      <GridItem
        borderRadius="13px"
        rowSpan={3}
        gridColumnStart={3}
        colSpan={31}
      />
      <GridItem
        borderRadius="13px"
        gridRowStart={4}
        gridRowEnd={12}
        gridColumnStart={3}
        gridColumnEnd={18}
        bg="#F7F9FA"
      />
      <GridItem
        borderRadius="13px"
        gridRowStart={4}
        gridRowEnd={8}
        gridColumnStart={18}
        gridColumnEnd={25}
        bg="#F7F9FA"
      />
      <GridItem
        borderRadius="13px"
        gridRowStart={8}
        gridRowEnd={12}
        gridColumnStart={18}
        gridColumnEnd={25}
        bg="#F7F9FA"
      />
      <GridItem
        borderRadius="13px"
        gridRowStart={4}
        gridRowEnd={8}
        gridColumnStart={25}
        gridColumnEnd={33}
        bg="#F7F9FA"
      />
      <GridItem
        borderRadius="13px"
        gridRowStart={8}
        gridRowEnd={12}
        gridColumnStart={25}
        gridColumnEnd={33}
        bg="#F7F9FA"
      />

      <GridItem
        borderRadius="13px"
        gridRowStart={12}
        gridRowEnd={20}
        gridColumnStart={3}
        gridColumnEnd={33}
        bg="#F7F9FA"
      />
    </Grid>
  );
};

export default Home;
