import React from "react";
import { RiFireFill } from "react-icons/ri";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start items-center">
      {/* Render icons based on the priority value */}
      {Array.from({ length: priority }).map((_, index) => (
        <RiFireFill key={index} className="text-orange-400 text-2xl" />
      ))}
    </div>
  );
};

export default PriorityDisplay;
