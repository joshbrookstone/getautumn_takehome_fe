import { Flex, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import CalenderStress from "../components/CalenderStress";
import DashBoardGreeting from "../components/dashBoardGreeting/DashBoardGreeting";
import InsightsHeader from "../components/insights/InsightsHeader";
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
      gap={10}
    >
      <GridItem rowSpan={20} colSpan={2} bg="#F7F9FA">
        <Navbar />
      </GridItem>
      <GridItem
        borderRadius="13px"
        rowSpan={3}
        gridColumnStart={3}
        colSpan={15}
        marginBottom="-10"
      >
        <DashBoardGreeting />
      </GridItem>
      <GridItem
        as={Flex}
        borderRadius="13px"
        rowSpan={3}
        gridColumnStart={18}
        colSpan={14}
        marginBottom="-10"
      >
        <InsightsHeader />
      </GridItem>
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
