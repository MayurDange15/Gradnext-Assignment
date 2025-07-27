const fs = require("fs");
const path = require("path");
const { sendReminderEmail, sendFinalEmail } = require("./emailService");
const DATA_FILE = path.join(__dirname, "db/registrations.json");

function scheduleReminders() {
  setInterval(() => {
    if (!fs.existsSync(DATA_FILE)) return;

    let data;
    try {
      data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    } catch (err) {
      console.error("Failed to parse registrations.json");
      return;
    }

    const now = new Date();
    let updated = false;

    data.forEach((user) => {
      const created = new Date(user.createdAt);
      const minutesPassed = (now - created) / 60000;

      if (user.status === "pending") {
        if (minutesPassed > 2 && !user.reminded) {
          sendReminderEmail(user);
          user.reminded = true;
          updated = true;
          console.log(`Reminder sent to ${user.email}`);
        } else if (minutesPassed > 3 && !user.final) {
          sendFinalEmail(user);
          user.final = true;
          updated = true;
          console.log(`Final email sent to ${user.email}`);
        }
      }
    });

    if (updated) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    }
  }, 30000); // check every 30 seconds
}

module.exports = { scheduleReminders };
