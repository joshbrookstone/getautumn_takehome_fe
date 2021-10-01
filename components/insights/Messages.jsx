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

function Messages() {
  return (
    <VStack justifyContent="center" alignSelf="center">
      <Stat>
        <Flex alignItems="center" justifyContent="center">
          <StatNumber fontSize="3xl" color="#159A6F">
            77
          </StatNumber>
          <StatLabel
            fontWeight="bold"
            marginLeft="1"
            fontSize="3xl"
            color="#159A6F"
          >
            Messages
          </StatLabel>
        </Flex>

        <StatLabel
          textAlign="center"
          fontSize="1xl"
          fontWeight="semibold"
          color="#42464A"
        >
          Sent to you this week outside traditional working hours
        </StatLabel>
        <StatHelpText
          color="#159A6F"
          textAlign="center"
          justifyContent="center"
        >
          <StatArrow type="increase" color="#159A6F" />
          56 since last week
        </StatHelpText>
      </Stat>
    </VStack>
  );
}

export default Messages;
