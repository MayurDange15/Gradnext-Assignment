# GradNext Full Stack Assignment (Combined)

A complete full stack project that handles cohort registration using a React frontend and an Express backend. Automatically sends confirmation and follow-up emails using Nodemailer + Mailgen.

---

## 🧱 Project Structure

```
project-root/
├── frontend/                # Assignment 1
│   └── Registration form
└── backend/ (Assignment.2) # Assignment 2
    ├── server.js
    ├── emailService.js
    ├── sequence.js
    ├── db/registrations.json
    └── .env
```

---

## 📌 Assignment 1: Frontend

### 🎯 Features

- Form: name, email, mobile
- Validations for required and format
- UI feedback: loading, success, error
- Responsive layout with Tailwind CSS

### 📦 Run Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📌 Assignment 2: Backend

### 🎯 Features

- API for registration and payment
- Emails via Gmail (confirmation, reminder, final)
- JSON as flat DB
- Email automation using `setInterval`

### 📦 Run Backend

```bash
cd backend
npm install
npm start
```

### 📂 .env Example

```env
MAIL_USER=yourgmail@gmail.com
MAIL_PASS=your_app_password
```

---

## 🔗 API Summary

| Endpoint        | Method | Description                      |
| --------------- | ------ | -------------------------------- |
| `/api/register` | POST   | Register user, send confirmation |
| `/api/pay/:id`  | POST   | Mark user as paid                |

---

## 🔁 Email Flow (Automated)

- On register → send confirmation
- After 2 minutes → send reminder
- After 3 minutes → send final email

---

## 🧪 Test Walkthrough

1. Fill form (frontend)
2. Wait 2 mins → reminder
3. Wait 3 mins → final
4. `POST /api/pay/:id` to simulate payment

---

## 🚀 Deployment Suggestion

- **Frontend**: Netlify / Vercel
- **Backend**: Render (Node Web Service)

---

## 🧠 Learnings

- Full form-to-email automation pipeline
- Gmail SMTP + Mailgen for clean HTML
- setInterval-based mock cron logic
- Data handling with JSON files

---

## 📜 License

MIT

---

Built for **GradNext Full Stack Challenge** by Mayur Rambhau Dange
