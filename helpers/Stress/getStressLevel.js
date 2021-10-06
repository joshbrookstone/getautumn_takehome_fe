export const getStressLevel = (stressArray) => {
  const allStress = stressArray.reduce((a, b) => ({
    stress: a.stress + b.stress,
  }));
  return (allStress["stress"] / stressArray.length).toFixed(1);
};
