import React from "react";
import {
  VStack,
  Stat,
  Flex,
  StatNumber,
  StatLabel,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

function DeepWork() {
  return (
    <VStack justifyContent="center" alignSelf="center">
      <Stat>
        <Flex alignItems="center" justifyContent="center">
          <StatNumber fontSize="3xl" color="#053A8D">
            36
          </StatNumber>
          <StatLabel
            fontWeight="bold"
            marginLeft="1"
            fontSize="3xl"
            color="#053A8D"
          >
            Hours
          </StatLabel>
        </Flex>

        <StatLabel
          textAlign="center"
          fontSize="1xl"
          fontWeight="semibold"
          color="#42464A"
        >
          Out of your week, you have this many hours for deep work
        </StatLabel>
        <StatHelpText
          color="#053A8D"
          textAlign="center"
          justifyContent="center"
        >
          <StatArrow type="decrease" color="#053A8D" /> -3 hours since last week
        </StatHelpText>
      </Stat>
    </VStack>
  );
}

export default DeepWork;
