import React from "react";
import { getStressLevelColors } from "../helpers/Stress/getStressLevelColors";

function Calender({ stressLevel, index }) {
  // only return a filled calender if stress is greater than 3

  return (
    <div>
      <svg
        className="w-9 h-9 "
        fill={getStressLevelColors(stressLevel, index)}
        stroke={getStressLevelColors(stressLevel, index)}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default Calender;
