# GradNext Assignment 2: Cohort Enrollment Automation

A backend project simulating a cohort registration and follow-up system using Express.js, Nodemailer, and Mailgen. This assignment focuses on automating email reminders based on user activity and simulates a payment journey.

---

## 🎯 Objective

- Handle form submissions
- Store registration data
- Send initial confirmation email
- Schedule follow-up emails (reminder + final)
- Track and simulate user interactions (email read, clicked, paid)

---

## 🛠️ Tech Stack

| Layer     | Stack                              |
| --------- | ---------------------------------- |
| Backend   | Node.js, Express.js                |
| Email     | Nodemailer, Mailgen                |
| DB        | JSON (Flat file DB)                |
| Scheduler | JavaScript setInterval (mock cron) |

---

## 📁 Folder Structure

```
Assignment.2/
├── server.js               # Express backend entrypoint
├── emailService.js         # Email logic using Mailgen & Nodemailer
├── sequence.js             # Email scheduling logic
├── db/
│   └── registrations.json  # Simulated database (JSON)
├── package.json
└── .env                    # Secrets: Gmail credentials
```

---

## 📦 Installation

### 1. Clone & Setup

```bash
git clone https://github.com/yourname/gradnext-assignment-2.git
cd Assignment.2
npm install
```

### 2. Configure `.env`

> Use a Gmail App Password (2FA must be enabled on your account)

```env
MAIL_USER=yourgmail@gmail.com
MAIL_PASS=your_app_password
```

### 3. Start Server

```bash
npm start
```

Server will run on: `http://localhost:5050`

---

## 🔗 API Endpoints

### `POST /api/register`

Registers user and sends initial email.

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "mobile": "9999999999"
}
```

Response:

```json
{ "message": "Registration successful. Email sent!" }
```

### `POST /api/pay/:id`

Simulates payment by updating status in JSON DB.

```bash
POST /api/pay/1724348291341
```

Response:

```json
{ "message": "Payment successful. Thank you!" }
```

---

## ⏰ Automation Flow (`sequence.js`)

> Triggered every 30 seconds via `setInterval`

- ✅ If 2 mins passed, send **reminder email** (if not already sent)
- ✅ If 3 mins passed, send **final email** (if not already sent)
- ✅ Updates `reminded` and `final` flags in `registrations.json`

---

## 📧 Email Content (Mailgen)

All emails are generated dynamically using Mailgen and sent via Gmail SMTP.

- Confirmation email includes `Pay Now` CTA
- Reminder + Final emails nudge the user if no payment is made

---

## ✅ Sample Email (Initial)

Subject: **Welcome to GradNext – Confirm Your Spot**

Content:

> Hi Jane,
>
> Thanks for registering for GradNext!
>
> [Pay Now] → Link to payment simulation

---

## 🧪 Testing the Flow

1. Fill out form on frontend → `/api/register`
2. Email sent instantly
3. Wait 2 minutes → Reminder sent
4. Wait 3 minutes → Final email sent
5. Hit `/api/pay/:id` to simulate payment

---

## 🚀 Improvements (Optional)

- Replace flat file DB with MongoDB Atlas
- Admin dashboard to view journey (status flags)
- Use node-cron or Agenda.js instead of setInterval
- Attach UTM parameters for real tracking

---

## 📜 License

MIT

---

Built for **GradNext** Full Stack Assignment by Mayur Rambhau Dange
