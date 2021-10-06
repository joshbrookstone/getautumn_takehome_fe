import React from "react";
import { Text, Center, chakra } from "@chakra-ui/react";

function CalenderText({ lowestStressDay, biggestStressDay }) {
  return (
    <Center wordBreak="break-word" maxWidth="350">
      <chakra.span color="#42464A" fontWeight="semibold" textAlign="center">
        Your stress was the highest on{" "}
        <chakra.span color="#39A881"> {biggestStressDay()}</chakra.span> and
        lowest on <chakra.span color="#08553D">{lowestStressDay()}</chakra.span>
      </chakra.span>
    </Center>
  );
}

export default CalenderText;
