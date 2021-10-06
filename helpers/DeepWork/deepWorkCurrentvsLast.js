import { howManyHoursOfDeepWork } from "./howManyHoursOfDeepWork";

export const deepWorkCurrentVsLast = ({
  currentWeekMeetings,
  lastWeekMeetings,
}) => {
  const currentDeepHours = howManyHoursOfDeepWork(currentWeekMeetings);
  const lastWeekDeepHours = howManyHoursOfDeepWork(lastWeekMeetings);

  return currentDeepHours - lastWeekDeepHours;
};
