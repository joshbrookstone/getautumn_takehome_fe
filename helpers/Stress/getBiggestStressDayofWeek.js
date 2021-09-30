export const getBiggestStressDayofWeek = (mockStressLevelOfDays) => {
  const results = {};
  mockStressLevelOfDays.forEach((singleDay) => {
    if (results["stress"]) {
      if (singleDay["stress"] > results["stress"]) {
        results["day"] = singleDay["day"];
        results["stress"] = singleDay["stress"];
      }
    } else {
      results["day"] = singleDay["day"];
      results["stress"] = singleDay["stress"];
    }
  });

  return results;
};
