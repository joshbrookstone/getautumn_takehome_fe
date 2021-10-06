import React from "react";
import { Box, Text, Select, Flex } from "@chakra-ui/react";

function ChartHeader() {
  return (
    <Box marginTop="1.5" as={Flex} w="100%" justifyContent="space-between">
      <Text flex="3" fontSize="2xl" fontWeight="black" textAlign="center">
        Your Trends
      </Text>
      <Select
        fontWeight="black"
        style={{ color: "#817D7D" }}
        flex="2"
        fontSize="large"
        color="#159A6F"
        placeholder="Individual"
      >
        <option value="option1">Individual</option>
        <option value="option2">Group</option>
      </Select>
      <Select
        style={{ color: "#817D7D" }}
        fontWeight="black"
        flex="2"
        fontSize="large"
        color="#159A6F"
        placeholder="Individual"
      >
        <option value="option1">Individual</option>
        <option value="option2">Group</option>
      </Select>
    </Box>
  );
}

export default ChartHeader;
