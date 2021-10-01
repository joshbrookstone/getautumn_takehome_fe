import Calender from "./Calender";
import { mockStressLevelOfDays } from "../../../mocks/mockStressLevels";
import { Container, Flex, Text } from "@chakra-ui/react";

const CalenderStress = () => {
  return (
    <Container
      flexDir="row"
      justifyContent="center"
      as={Flex}
      maxW="container.sm"
    >
      {mockStressLevelOfDays.map((stressLevel, index) => {
        return <Calender stressLevel={stressLevel} index={index}></Calender>;
      })}
    </Container>
  );
};

export default CalenderStress;

{
  /* <div className="h-screen max-w-md flex flex-col justify-center place-items-center">
      <div className="  flex  justify-center items-center text-center mb-2">
        {mockStressLevelOfDays.map((stressLevel, index) => {
          return <Calender stressLevel={stressLevel} index={index}></Calender>;
        })}
      </div>
      <div className=" flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl mb-2 break-words">
          Your stress was the highest on Wednesday and lowest on Monday
        </h2>
        <p className="mb-2">Crsipy, delicous and nutritious</p>
      </div>
    </div> */
}
