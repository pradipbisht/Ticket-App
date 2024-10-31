import React from "react";

const StatusDisplay = ({ status }) => {
  return (
    <span
      className={`inline-block bg-amber-500 rounded-full px-2 text-xs font-semibold `}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusDisplay;
