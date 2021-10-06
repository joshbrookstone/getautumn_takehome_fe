export const meetingsCurrentVsLast = ({
  lastWeekMeetings,
  currentWeekMeetings,
}) => {
  return currentWeekMeetings.length - lastWeekMeetings.length;
};
