import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const DeleteBlock = ({ id }) => {
  const navigate = useNavigate();

  const deleteTicket = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/tickets/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        navigate(0);
      } else {
        console.error("Failed to delete the ticket:", res.statusText);
      }
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

  return (
    <div>
      <button
        onClick={deleteTicket}
        className="flex items-center space-x-2 p-2 bg-red-600 text-white rounded hover:bg-red-700">
        <AiFillDelete className="text-white text-lg" /> <span>Delete</span>
      </button>
    </div>
  );
};

export default DeleteBlock;
