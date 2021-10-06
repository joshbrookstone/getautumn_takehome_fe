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

function Messages({ outOfWorkMessages, outOfWorkMessagesCurrentVsLast }) {
  console.log(outOfWorkMessagesCurrentVsLast());
  return (
    <VStack justifyContent="center" alignSelf="center">
      <Stat>
        <Flex alignItems="center" justifyContent="center">
          <StatNumber fontSize="3xl" color="#159A6F">
            {outOfWorkMessages}
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
          <StatArrow
            type={
              outOfWorkMessagesCurrentVsLast() > 0 ? "increase" : "decrease"
            }
            color="#159A6F"
          />
          {outOfWorkMessagesCurrentVsLast()} since last week
        </StatHelpText>
      </Stat>
    </VStack>
  );
}

export default Messages;
