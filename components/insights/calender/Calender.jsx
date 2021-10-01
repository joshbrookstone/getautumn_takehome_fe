import React from "react";
import { getStressLevelColors } from "../../../helpers/Stress/getStressLevelColors";
import { GrCalendar } from "react-icons/gr";
import { Icon } from "@chakra-ui/react";

function Calender({ stressLevel, index }) {
  // only return a filled calender if stress is greater than 3

  return <Icon marginX="0.5" as={GrCalendar} w={10} h={9} color="#323232" />;
}

export default Calender;
