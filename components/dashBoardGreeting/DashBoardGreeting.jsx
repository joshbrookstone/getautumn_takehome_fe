import React from "react";
import { Flex, Text } from "@chakra-ui/react";

function DashBoardGreeting() {
  return (
    <Flex fontWeight="bold" flexDir="column">
      <Text mt="3" fontSize="4xl">
        Welcome back, Quinn
      </Text>
      <Text mt="4" fontSize="2xl">
        How are you doing?
      </Text>
    </Flex>
  );
}

export default DashBoardGreeting;
