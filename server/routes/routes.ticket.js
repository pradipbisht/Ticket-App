import express from "express";
import Ticket from "../models/ticket.model.js";

const router = express.Router();

// @desc    Create a new ticket
// @route   POST /api/tickets
router.post("/", async (req, res) => {
  try {
    const { title, description, category, priority, progress, status, active } =
      req.body;
    const newTicket = new Ticket({
      title,
      description,
      category,
      priority,
      progress,
      status,
      active,
    });
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Get all tickets
// @route   GET /api/tickets
router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get a ticket by ID
// @route   GET /api/tickets/:id
router.get("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete a ticket
// @route   DELETE /api/tickets/:id
router.delete("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.status(204).send(); // No content to send back
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
