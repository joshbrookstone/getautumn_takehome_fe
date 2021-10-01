import React from "react";
import { Flex, Text } from "@chakra-ui/react";

function InsightsHeader() {
  return (
    <Flex alignItems="flex-end" flexDir="row">
      <Text fontWeight="bold" mt="4" fontSize="2xl">
        Your Insights
      </Text>
    </Flex>
  );
}

export default InsightsHeader;
