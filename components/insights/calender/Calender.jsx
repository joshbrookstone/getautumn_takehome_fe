import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";

function Calender({ lowestStressIndex, biggestStressIndex, dayIndex }) {
  const fillColor = () => {
    if (dayIndex === lowestStressIndex) {
      return "#08553D";
    }

    if (dayIndex === biggestStressIndex) {
      return "#39A881";
    }

    return "#525559";
  };

  return (
    <Icon
      fill={fillColor()}
      marginX="-1"
      as={AiFillCalendar}
      w={10}
      h={9}
      color="#323232"
    />
  );
}

export default Calender;
