import Calender from "./Calender";
import { Container, Flex } from "@chakra-ui/react";

const CalenderStress = ({ lowestStressIndex, biggestStressIndex }) => {
  return (
    <Container
      flexDir="row"
      justifyContent="center"
      as={Flex}
      maxW="container.sm"
    >
      {[1, 2, 3, 4, 5].map((dayIndex, index) => {
        return (
          <Calender
            lowestStressIndex={lowestStressIndex()}
            biggestStressIndex={biggestStressIndex()}
            dayIndex={dayIndex}
            key={index}
          ></Calender>
        );
      })}
    </Container>
  );
};

export default CalenderStress;
