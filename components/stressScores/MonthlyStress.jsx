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

function MonthlyStress({ currentMonthStress, lastMonthStress }) {
  const stressChange = (currentMonthStress() - lastMonthStress()).toFixed(1);
  const isStressChangePositive = stressChange > 0;

  return (
    <VStack justifyContent="center" alignSelf="center">
      <Stat>
        <Flex alignItems="center">
          <StatNumber fontSize="5xl" color="#0D5941">
            {currentMonthStress()}
          </StatNumber>
          <StatNumber marginLeft="1" fontSize="2xl" color="#0D5941">
            /5
          </StatNumber>
        </Flex>

        <StatLabel fontSize="1xl" fontWeight="bold" color="#42464A">
          Your Monthly Stress
        </StatLabel>
        <StatHelpText
          color="black"
          wordBreak="break-word"
          maxWidth="170px"
          textAlign="left"
        >
          <StatArrow
            type={isStressChangePositive ? "increase" : "decrease"}
            color="#0D5941"
          />
          {isStressChangePositive ? "+" : ""}
          {stressChange} average stress since last month
        </StatHelpText>
      </Stat>
    </VStack>
  );
}

export default MonthlyStress;
