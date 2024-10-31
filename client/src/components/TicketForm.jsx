import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TicketForm = () => {
  const startingTicketData = {
    title: "",
    description: "",
    priority: "1",
    progress: 0,
    status: "Not started",
    category: "Life Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation for required fields
    if (!formData.title || !formData.description) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const res = await fetch("http://localhost:5000/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to create ticket");
      }

      toast.success("Ticket created successfully!");
      setFormData(startingTicketData); // Reset form state
      navigate("/"); // Redirect to homepage
    } catch (error) {
      console.error("Error creating ticket:", error.message);
      setErrorMessage(error.message); // Set error message for user feedback
      toast.error(error.message);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="flex justify-center p-8">
      <form
        className="grid grid-cols-2 gap-6 bg-gray-800 p-6 rounded-lg text-white w-full max-w-4xl"
        onSubmit={handleSubmit}>
        <h3 className="col-span-2 text-2xl font-semibold text-center uppercase text-amber-600">
          Create Your Ticket
        </h3>

        <div className="col-span-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            required
            value={formData.title}
            disabled={loading}
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={handleChange}
            required
            value={formData.description}
            disabled={loading}
            rows={3}
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            disabled={loading}
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="Life Problem">Life Problem</option>
            <option value="Coding Problem">Coding Problem</option>
            <option value="Career Problem">Career Problem</option>
          </select>
        </div>

        <div className="col-span-1">
          <label>Priority</label>
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((level) => (
              <div key={level} className="flex items-center">
                <input
                  type="radio"
                  id={`priority-${level}`}
                  name="priority"
                  onChange={handleChange}
                  value={level}
                  checked={formData.priority === String(level)}
                  disabled={loading}
                />
                <label htmlFor={`priority-${level}`} className="ml-1">
                  {["Low", "Medium", "High", "Very High"][level - 1]}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1">
          <label htmlFor="progress">Progress</label>
          <input
            type="range"
            id="progress"
            name="progress"
            value={formData.progress}
            min={0}
            max={100}
            onChange={handleChange}
            disabled={loading}
            className="w-full"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={handleChange}
            disabled={loading}
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="Not started">Not Started</option>
            <option value="Working">Working</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <div className="col-span-2 flex justify-center">
          <input
            type="submit"
            value={loading ? "Submitting..." : "Create Ticket"}
            disabled={loading}
            className="p-2 mt-4 bg-blue-600 rounded text-white font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer w-full max-w-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
