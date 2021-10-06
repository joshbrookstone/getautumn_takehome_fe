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

function WeeklyStress({ currentWeekStress, lastWeekStress }) {
  const stressChange = (currentWeekStress() - lastWeekStress()).toFixed(1);
  const isStressChangePositive = stressChange > 0;

  return (
    <VStack justifyContent="center" alignSelf="center">
      <Stat>
        <Flex alignItems="center">
          <StatNumber fontSize="5xl" color="#129B6F">
            {currentWeekStress()}
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
          <StatArrow
            type={isStressChangePositive ? "increase" : "decrease"}
            color="#129B6F"
          />
          {isStressChangePositive ? "+" : ""}
          {stressChange} average stress since last week
        </StatHelpText>
      </Stat>
    </VStack>
  );
}

export default WeeklyStress;
