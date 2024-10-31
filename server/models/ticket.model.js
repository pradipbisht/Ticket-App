import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    category: {
      type: String,
      enum: ["Life Problem", "Coding Problem", "Carrier Problem"],
      required: [true, "Category is required"],
    },
    priority: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: [true, "Priority is required"],
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Not started", "Working", "Done"],
      required: [true, "Status is required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
