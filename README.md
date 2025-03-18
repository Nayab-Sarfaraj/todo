# 🚀 Full-Stack To-Do App (Next.js + Express + MongoDB)

This is a full-stack To-Do application built with:
- **Frontend:** Next.js (App Router)
- **Backend:** Express.js with MongoDB
- **Database:** MongoDB (Mongoose ORM)

---

## 📌 Features
✅ Create, Read, Update, and Delete (CRUD) To-Dos  
✅ Pagination for To-Do list  
✅ Server-Side Rendering (SSR) with Next.js  
✅ API built with Express & MongoDB  

---

## 🛠️ Tech Stack
**Frontend:**
- Next.js (App Router)
- Tailwind CSS (for styling)
- Axios (for API requests)

**Backend:**
- Express.js
- MongoDB (Mongoose)
- Cors & dotenv

---
## API Endpoints

*   `POST /todo`: Add a new todo.
*   `GET /todo/all?page=pageNumber`: Get  todos at specific page.
*   `PUT /todo/:id`: Update a todo.
*   `DELETE /complete/:id`: mark todo as completed.

---

## 📦 Installation

1.  **Clone the repository:** `git clone https://github.com/Nayab-Sarfaraj/todo-`
2.  **Install dependencies:**
    *   Frontend: `cd client && npm install`
    *   Backend: `cd server && npm install`
3.  **Configure MongoDB:** Ensure MongoDB is running and update the connection string in the backend configuration.
4.  **Run the application:**
    *   Frontend: `cd client && npm run dev`
    *   Backend: `cd server && npm start`
5.  **Access the application:** Open your browser and navigate to the frontend URL (usually `http://localhost:3000`).
