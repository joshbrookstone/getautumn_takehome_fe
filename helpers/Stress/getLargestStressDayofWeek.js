export const getLargestStressDayOfWeek = (mockStressLevelOfDays) => {
  const max = mockStressLevelOfDays.reduce((prev, current) =>
    prev.stress > current.stress ? prev : current
  );

  const date = new Date(max.created_at);
  const dateIndex = date.getDay();
  const dateDay = date.toLocaleString("en", { weekday: "long" });

  return { dateIndex, dateDay };
};
