# 🔐 Authentication System

A **full-stack user authentication system** built with **React (frontend)** and **Node.js + Express (backend)**.  
It supports **JWT-based login**, **secure password hashing**, and **MongoDB integration** — all wrapped in a clean architecture.

---

## 🚀 Live Demo
> *(Coming soon – add your deployed link here)*  
Example: [https://authentication-demo.vercel.app](https://authentication-demo.vercel.app)

---

## 🧩 Features
✅ User Registration & Login  
✅ JWT (JSON Web Token) Authentication  
✅ Password Encryption with **bcrypt.js**  
✅ Token-based Protected Routes  
✅ User Data stored securely in **MongoDB Atlas**  
✅ Clean MVC structure for scalability  
✅ Environment variables for sensitive data

---

## 🛠️ Tech Stack

**Frontend (client):**
- ⚛️ React.js (CRA or Vite)
- 🎨 CSS / Tailwind
- 🔗 Axios (API integration)
- 🧭 React Router DOM

**Backend (server):**
- 🟢 Node.js
- 🚀 Express.js
- 🗄️ MongoDB + Mongoose
- 🔒 JWT & bcrypt for security
- 🌍 CORS for cross-origin requests

---

## 📁 Folder Structure

authentication-system/
│
├── backend/ # Server-side (Node.js, Express, MongoDB)
│ ├── config/ # Database connection & environment setup
│ ├── controllers/ # Logic for routes
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API endpoints
│ ├── middlewares/ # Auth middleware (JWT)
│ └── server.js # Entry point
│
├── client/ # Frontend (React app)
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Login / Register pages
│ │ └── App.js
│ └── package.json
│
└── .gitignore
