import React from "react";
import { Button, Flex } from "@chakra-ui/react";

function StressScoreButton() {
  return (
    <Button
      as={Flex}
      borderRadius="full"
      flex={0.3}
      marginBottom="5"
      colorScheme="GAButtonGreen"
      color="#F4F8F7"
      size="lg"
      marginX="14"
    >
      What are Stress Scores?
    </Button>
  );
}

export default StressScoreButton;
