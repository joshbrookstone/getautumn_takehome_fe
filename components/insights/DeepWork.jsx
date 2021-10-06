import React from "react";
import {
  VStack,
  Stat,
  Flex,
  StatNumber,
  StatLabel,
  StatHelpText,
  StatArrow,
  chakra,
} from "@chakra-ui/react";

function DeepWork({ thisWeekDeepHours, deepWorkCurrentVsLast }) {
  return (
    <VStack justifyContent="center" alignSelf="center">
      <Stat>
        <Flex alignItems="center" justifyContent="center">
          <StatNumber fontSize="3xl" color="#053A8D">
            {thisWeekDeepHours()}
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
          color="#42464A"
          textAlign="center"
          justifyContent="center"
        >
          <StatArrow
            type={deepWorkCurrentVsLast() > 0 ? "increase" : "decrease"}
            color="#053A8D"
          />{" "}
          <chakra.span color="#053A8D">
            {deepWorkCurrentVsLast()}{" "}
            {deepWorkCurrentVsLast() === 1 || deepWorkCurrentVsLast() === -1
              ? "hour"
              : "hours"}
          </chakra.span>{" "}
          since last week
        </StatHelpText>
      </Stat>
    </VStack>
  );
}

export default DeepWork;
