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

function Meetings() {
  return (
    <VStack justifyContent="center" alignSelf="center">
      <Stat>
        <Flex alignItems="center" justifyContent="center">
          <StatNumber fontSize="3xl" color="#EB9A22">
            4
          </StatNumber>
          <StatLabel
            fontWeight="bold"
            marginLeft="1"
            fontSize="3xl"
            color="#EB9A22"
          >
            Meetings
          </StatLabel>
        </Flex>

        <StatLabel
          fontSize="1xl"
          textAlign="center"
          fontWeight="semibold"
          color="#42464A"
        >
          This week, you have this many meetings scheduled
        </StatLabel>
        <StatHelpText
          color="#EB9A22"
          textAlign="center"
          textAlignLast="center"
          justifyContent="center"
        >
          <StatArrow type="decrease" color="#EB9A22" />2 fewer compared with
          last week
        </StatHelpText>
      </Stat>
    </VStack>
  );
}

export default Meetings;
