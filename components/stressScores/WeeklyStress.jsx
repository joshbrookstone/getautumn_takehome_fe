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

function WeeklyStress() {
  return (
    <VStack justifyContent="center" alignSelf="center">
      <Stat>
        <Flex alignItems="center">
          <StatNumber fontSize="5xl" color="#129B6F">
            3.8
          </StatNumber>
          <StatNumber marginLeft="1" fontSize="2xl" color="#129B6F">
            /5
          </StatNumber>
        </Flex>

        <StatLabel fontSize="1xl" fontWeight="bold" color="#42464A">
          Your Weekly Stress
        </StatLabel>
        <StatHelpText
          color="black"
          wordBreak="break-word"
          maxWidth="170px"
          textAlign="left"
        >
          <StatArrow type="decrease" color="#129B6F" />
          -0.5 average stress since last week
        </StatHelpText>
      </Stat>
    </VStack>
  );
}

export default WeeklyStress;
