import moment from "moment";

export const howManyHoursOfDeepWork = (oneWeekOfMeetings) => {
  let hoursOfDeepWork = 40;

  oneWeekOfMeetings.forEach((x) => {
    const startTime = moment.duration(x.MeetingStartTime, "h").asHours();
    const endTiem = moment.duration(x.MeetingEndTime, "h").asHours();
    const subtract = endTiem - startTime;
    return (hoursOfDeepWork -= subtract);
  });

  return hoursOfDeepWork;
};
