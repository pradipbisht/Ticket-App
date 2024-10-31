import React, { useEffect, useState } from "react";
import TicketCard from "../components/TicketCard";

const Home = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tickets")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched tickets data:", data);
        setTickets(data);
      })
      .catch((error) => console.error("Error fetching tickets:", error));
  }, []);

  return (
    <div className="p-5 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-4">Ticket Management</h1>
      <div className="lg:grid grid-cols-2 xl:grid-cols-4 gap-4">
        {tickets.map((ticket, index) => (
          <TicketCard
            key={ticket._id}
            title={ticket.title}
            description={ticket.description}
            date={ticket.date}
            category={ticket.category}
            priority={ticket.priority}
            status={ticket.status || "Not started"}
            id={ticket._id}
            progress={ticket.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
