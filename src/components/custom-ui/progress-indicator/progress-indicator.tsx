import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProgressProps {
  day: number; 
  dayText: string;
  value: number; // e.g., 15
  total: number; // e.g., 20
}

export const ProgressIndicator: React.FC<ProgressProps> = ({
  day,
  dayText,
  value,
  total,
}) => {
  const percentage = (value / total) * 100;
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-[#F5F7FB] p-0 w-24 h-24">
      <CircularProgressbar
        value={percentage}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: "#939FF8", // Progress bar color
          trailColor: "#DDE3F0", // Background trail color
          strokeLinecap: "round", // Round edges
        })}
      />
      <div className="absolute flex flex-col items-center justify-center text-secondary">
        <span className="text-xs font-medium text-gray-500">{dayText}</span>
        <span className="text-xl font-bold text-gray-500">{day}</span>
        <span className="text-xs font-normal text-gray-500">
          {value} / {total}
        </span>
      </div>
    </div>
  );
};
