# GradNext Assignment 1: Registration Form Frontend

This project is the frontend component of the GradNext Full Stack assignment. It allows users to submit their interest in joining a cohort by filling out a registration form. This form connects to the Assignment 2 backend.

---

## 🎯 Objective

- Build a responsive React-based registration form
- Validate user inputs (name, email, mobile)
- Connect to backend endpoint (`/api/register`)
- Display loading, success, and error messages

---

## 🧰 Tech Stack

| Layer     | Stack             |
| --------- | ----------------- |
| Frontend  | React.js          |
| Styling   | Tailwind CSS      |
| API Comm. | Fetch API / Axios |

---

## 📁 Folder Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── Registration.jsx   # Main form component
│   ├── App.jsx
│   └── index.css              # Tailwind & custom styles
├── public/
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/gradnext-frontend.git
cd gradnext-frontend
npm install
```

### 2. Update Backend API URL (if needed)

In `Registration.jsx`:

```js
const res = await fetch("http://localhost:5050/api/register", {...})
```

Change the URL if deployed to Render or other backend.

### 3. Run the App

```bash
npm run dev  # If using Vite
```

The app runs at: `http://localhost:5173`

---

## ✏️ Form Fields

| Field  | Type  | Validation             |
| ------ | ----- | ---------------------- |
| Name   | text  | Required, max 40 chars |
| Email  | email | Required, valid email  |
| Mobile | tel   | 10-digit numeric only  |

---

## 🧪 UI Feedback

- 🌀 Loading spinner during submission
- ✅ Success message on successful registration
- ❌ Error message if backend fails

---

## 📌 Notes

- Uses native HTML form + Tailwind classes
- Connected to Assignment 2 backend for full automation
- Font: Avenir Black (optional)

---

## 🧠 Learnings

- Form state management with React
- Input validation and formatting
- Connecting frontend to custom backend

---

## 📜 License

MIT

---

Built for **GradNext** Full Stack Assignment 1 by Mayur Rambhau Dange
