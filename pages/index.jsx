import { Flex, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import { motion } from "framer-motion";
import Chart from "../components/chart/Chart";
import ChartHeader from "../components/chart/ChartHeader";
import {
  CalenderStress,
  CalenderText,
  DashBoardGreeting,
  DeepWork,
  InsightsHeader,
  Meetings,
  Messages,
  MonthlyStress,
  Navbar,
  StressScoreButton,
  WeeklyStress,
} from "../components/index";
import {
  getCurrentMonthStress,
  getCurrentWeekMeetings,
  getCurrentWeekStress,
  getLastMonthStress,
  getLastWeekMeetings,
  getLastWeekStress,
  getSingleUser,
} from "../Constants/ApiUrls";
import { getLargestStressDayOfWeek } from "../helpers/Stress/getLargestStressDayofWeek";
import { getLowestStressDayOfWeek } from "../helpers/Stress/getLowestStressDayOfWeek";
import { getStressLevel } from "../helpers/Stress/getStressLevel";
import { meetingsCurrentVsLast } from "../helpers/Meetings/meetingsCurrentVsLast";
import { howManyHoursOfDeepWork } from "../helpers/DeepWork/howManyHoursOfDeepWork";
import { deepWorkCurrentVsLast } from "../helpers/DeepWork/deepWorkCurrentvsLast";

const Home = ({
  user,
  currentWeekStress,
  lastWeekStress,
  lastMonthStress,
  currentMonthStress,
  currentWeekMeetings,
  lastWeekMeetings,
}) => {
  const MotionGridItem = motion(GridItem);
  const MotionGrid = motion(Grid);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <MotionGrid
      variants={container}
      initial="hidden"
      animate="show"
      height="100vh"
      templateRows="repeat(20, 1fr)"
      templateColumns="repeat(32, 1fr)"
      gap={10}
    >
      <MotionGridItem rowSpan={20} colSpan={2} bg="#F7F9FA" shadow="xl">
        <Navbar user={user} />
      </MotionGridItem>

      <MotionGridItem
        variants={item}
        borderRadius="13px"
        rowSpan={3}
        gridColumnStart={3}
        colSpan={15}
        marginBottom="-10"
      >
        <DashBoardGreeting user={user} />
      </MotionGridItem>

      <MotionGridItem
        variants={item}
        as={Flex}
        borderRadius="13px"
        rowSpan={3}
        gridColumnStart={18}
        colSpan={14}
        marginBottom="-10"
      >
        <InsightsHeader />
      </MotionGridItem>

      <MotionGridItem
        variants={item}
        shadow="xl"
        borderRadius="13px"
        gridRowStart={4}
        gridRowEnd={12}
        gridColumnStart={3}
        gridColumnEnd={18}
        bg="#F7F9FA"
        as={Flex}
        flexDir="column"
      >
        <Flex flex={1} justifyContent="space-evenly">
          <WeeklyStress
            currentWeekStress={() => getStressLevel(currentWeekStress)}
            lastWeekStress={() => getStressLevel(lastWeekStress)}
          />
          <MonthlyStress
            currentMonthStress={() => getStressLevel(currentMonthStress)}
            lastMonthStress={() => getStressLevel(lastMonthStress)}
          />
        </Flex>
        <StressScoreButton />
      </MotionGridItem>

      <MotionGridItem
        variants={item}
        shadow="xl"
        borderRadius="13px"
        gridRowStart={4}
        gridRowEnd={8}
        gridColumnStart={18}
        gridColumnEnd={25}
        bg="#F7F9FA"
        as={Flex}
        flexDir="column"
        justifyContent="space-evenly"
      >
        <CalenderStress
          lowestStressIndex={() =>
            getLowestStressDayOfWeek(currentWeekStress).dateIndex
          }
          biggestStressIndex={() =>
            getLargestStressDayOfWeek(currentWeekStress).dateIndex
          }
        />
        <CalenderText
          lowestStressDay={() =>
            getLowestStressDayOfWeek(currentWeekStress).dateDay
          }
          biggestStressDay={() =>
            getLargestStressDayOfWeek(currentWeekStress).dateDay
          }
        />
      </MotionGridItem>

      <MotionGridItem
        variants={item}
        shadow="xl"
        borderRadius="13px"
        gridRowStart={8}
        gridRowEnd={12}
        gridColumnStart={18}
        gridColumnEnd={25}
        bg="#F7F9FA"
        as={Flex}
        justifyContent="center"
      >
        <Meetings
          howManyMeetings={currentWeekMeetings.length}
          meetingsCurrentVsLast={() =>
            meetingsCurrentVsLast({
              currentWeekMeetings: currentWeekMeetings,
              lastWeekMeetings: lastWeekMeetings,
            })
          }
        />
      </MotionGridItem>

      <MotionGridItem
        variants={item}
        shadow="xl"
        borderRadius="13px"
        gridRowStart={4}
        gridRowEnd={8}
        gridColumnStart={25}
        gridColumnEnd={32}
        bg="#F7F9FA"
        as={Flex}
        justifyContent="center"
      >
        <Messages />
      </MotionGridItem>

      <MotionGridItem
        variants={item}
        shadow="xl"
        borderRadius="13px"
        gridRowStart={8}
        gridRowEnd={12}
        gridColumnStart={25}
        gridColumnEnd={32}
        bg="#F7F9FA"
        bg="#F7F9FA"
        as={Flex}
        justifyContent="center"
      >
        <DeepWork
          deepWorkCurrentVsLast={() =>
            deepWorkCurrentVsLast({ currentWeekMeetings, lastWeekMeetings })
          }
          thisWeekDeepHours={() => howManyHoursOfDeepWork(currentWeekMeetings)}
        />
      </MotionGridItem>

      <MotionGridItem
        as={Flex}
        variants={item}
        shadow="xl"
        borderRadius="13px"
        gridRowStart={12}
        gridRowEnd={20}
        gridColumnStart={3}
        gridColumnEnd={32}
        bg="#F7F9FA"
        flexDir="column"
        margin={-3}
      >
        <ChartHeader />

        <Chart data={currentMonthStress} />
      </MotionGridItem>
    </MotionGrid>
  );
};

export async function getServerSideProps() {
  const fetchUserData = axios.get(getSingleUser);
  const fetchCurrentWeeksStress = axios.get(getCurrentWeekStress);
  const fetchLastWeeksStress = axios.get(getLastWeekStress);
  const fetchLastMonthStress = axios.get(getLastMonthStress);
  const fetchCurrentMonthStress = axios.get(getCurrentMonthStress);
  const fetchCurrentWeekMeetings = axios.get(getCurrentWeekMeetings);
  const fetchLastWeekMeetings = axios.get(getLastWeekMeetings);

  const axiosResults = await axios.all([
    fetchUserData,
    fetchCurrentWeeksStress,
    fetchLastWeeksStress,
    fetchLastMonthStress,
    fetchCurrentMonthStress,
    fetchCurrentWeekMeetings,
    fetchLastWeekMeetings,
  ]);

  const user = axiosResults[0].data;

  const currentWeekStress = axiosResults[1].data;

  const lastWeekStress = axiosResults[2].data;

  const lastMonthStress = axiosResults[3].data;

  const currentMonthStress = axiosResults[4].data;

  const currentWeekMeetings = axiosResults[5].data;

  const lastWeekMeetings = axiosResults[6].data;

  return {
    props: {
      user,
      currentWeekStress,
      lastWeekStress,
      lastMonthStress,
      currentMonthStress,
      currentWeekMeetings,
      lastWeekMeetings,
    },
  };
}

export default Home;
