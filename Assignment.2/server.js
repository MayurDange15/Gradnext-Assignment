const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const {
  sendInitialEmail,
  sendReminderEmail,
  sendFinalEmail,
} = require("./emailService");
const { scheduleReminders } = require("./sequence");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, "db/registrations.json");

app.use(cors());
app.use(express.json());

// POST /api/register
app.post("/api/register", async (req, res) => {
  const { name, email, mobile } = req.body;

  if (!name || !email || !mobile) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let registrations = [];
  if (fs.existsSync(DATA_FILE)) {
    registrations = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  }

  const user = {
    id: Date.now(),
    name,
    email,
    mobile,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  registrations.push(user);
  fs.writeFileSync(DATA_FILE, JSON.stringify(registrations, null, 2));

  try {
    await sendInitialEmail(user);
    res.json({ message: "Registration successful. Email sent!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
});

// POST /api/pay/:id (simulate payment)
app.post("/api/pay/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  const index = data.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  data[index].status = "paid";
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

  res.json({ message: "Payment successful. Thank you!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  scheduleReminders();
});
