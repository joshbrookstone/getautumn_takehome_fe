import React from "react";
import { Flex, Text } from "@chakra-ui/react";

function DashBoardGreeting({ user }) {
  return (
    <Flex fontWeight="bold" flexDir="column">
      <Text mt="3" fontSize="4xl">
        Welcome back, {user ? user.first_name : ""}
      </Text>
      <Text mt="4" fontSize="2xl">
        How are you doing?
      </Text>
    </Flex>
  );
}

export default DashBoardGreeting;
