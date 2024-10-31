import React from "react";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";
import DeleteBlock from "./DeleteBlock";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TicketCard = ({
  title,
  description,
  date,
  category,
  priority,
  status,
  id,
  progress,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between bg-gray-800 rounded-lg shadow-md p-6 m-4 border border-gray-700 transition-shadow duration-300 hover:shadow-xl h-full">
      <div>
        <div className="flex items-center mb-4">
          <PriorityDisplay priority={priority} />
          <div className="ml-auto flex space-x-2">
            <FaEdit
              onClick={() => navigate(`/create-ticket/${id}`)}
              className="text-white text-xl cursor-pointer hover:text-blue-400 transition-colors duration-300"
            />
            <DeleteBlock id={id} />
          </div>
        </div>

        <h4 className="font-semibold text-xl text-white mb-2">{title}</h4>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm mb-4">
        <p className="mb-2 md:mb-0">{date}</p>
        <p className="italic">{category}</p>
      </div>
      <ProgressBar progress={progress} /> {/* Pass the progress value */}
      <div className="flex justify-between items-center mt-4">
        <StatusDisplay status={status} />
      </div>
      {/* Description positioned at the bottom */}
      <p className="text-gray-300 leading-relaxed whitespace-pre-wrap mb-4 flex-grow">
        {description}
      </p>
    </div>
  );
};

export default TicketCard;
