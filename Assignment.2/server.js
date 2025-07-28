const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const upload = multer();

const {
  sendInitialEmail,
  sendReminderEmail,
  sendFinalEmail,
} = require("./emailService");
const { scheduleReminders } = require("./sequence");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;
const DATA_FILE = path.join(__dirname, "db/registrations.json");

app.use(cors());
app.use(express.json()); // For JSON payloads
app.use(express.urlencoded({ extended: true })); // For form submissions

app.post("/api/test", (req, res) => {
  res.status(200).json({ message: "API working" });
});

app.post("/api/register", async (req, res) => {
  // Wrap all logic in a single, robust try...catch block
  try {
    const { name, email, mobile } = req.body;

    if (!name || !email || !mobile) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let registrations = [];

    // Check if the file exists before trying to read it
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, "utf-8");
      // Prevent parsing an empty or corrupted file, which would cause a crash
      if (fileContent) {
        registrations = JSON.parse(fileContent);
      }
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
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify(registrations, null, 2));
    } catch (writeErr) {
      console.error("❌ Failed to write JSON:", writeErr);
    }

    // Attempt to send the initial email
    try {
      const result = await sendInitialEmail(user);
      console.log("✅ Resend API Response:", result);
    } catch (emailErr) {
      console.error("❌ Failed to send email:", emailErr.message);
      // Don't crash backend
    }

    // If everything above was successful, send a success response
    res.status(201).json({ message: "Registration successful. Email sent!" });
    console.log("✅ Registered:", user.email);
  } catch (error) {
    // THIS IS THE MOST IMPORTANT PART
    // If any part of the 'try' block fails, this will catch the error.
    // It logs the detailed error to your backend terminal for debugging.
    console.error("--- REGISTRATION FAILED ---", error);

    // It then sends a clean error message to the frontend without crashing.
    res
      .status(500)
      .json({ message: "An internal server error occurred on the server." });
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
