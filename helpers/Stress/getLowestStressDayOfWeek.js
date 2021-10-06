export const getLowestStressDayOfWeek = (mockStressLevelOfDays) => {
  const min = mockStressLevelOfDays.reduce((prev, current) =>
    prev.stress < current.stress ? prev : current
  );
  const date = new Date(min.created_at);
  const dateIndex = date.getDay();
  const dateDay = date.toLocaleString("en", { weekday: "long" });

  return { dateIndex, dateDay };
};
