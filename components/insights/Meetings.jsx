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

function Meetings({ howManyMeetings, meetingsCurrentVsLast }) {
  const fewerOrMore = () => {
    if (meetingsCurrentVsLast() < 0) {
      return "fewer ";
    } else {
      return "more ";
    }
  };
  return (
    <VStack justifyContent="center" alignSelf="center">
      <Stat>
        <Flex alignItems="center" justifyContent="center">
          <StatNumber fontSize="3xl" color="#EB9A22">
            {howManyMeetings}
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
          color="#42464A"
          textAlign="center"
          // textAlignLast="center"
          justifyContent="center"
        >
          <StatArrow
            type={meetingsCurrentVsLast > 0 ? "increase" : "decrease"}
            color="#EB9A22"
          />
          <chakra.span color="#EB9A22">
            {Math.abs(meetingsCurrentVsLast())} {fewerOrMore()}
          </chakra.span>
          compared with last week
        </StatHelpText>
      </Stat>
    </VStack>
  );
}

export default Meetings;
