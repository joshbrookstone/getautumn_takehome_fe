export const outOfWorkMessagesCurrentVsLast = ({
  lastWeekMessages,
  currentWeekMessages,
}) => {
  return currentWeekMessages.length - lastWeekMessages.length;
};
