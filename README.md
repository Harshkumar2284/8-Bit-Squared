# 🎮 8-Bit Squared – Retro-Themed Event-Driven Communication Engine

PixelChat is a full-stack, real-time chat ecosystem designed with a gamified, cozy 8-bit aesthetic. Moving away from the boilerplate dark-mode clones, PixelChat combines high-performance real-time infrastructure with a custom pixel-art design system. Under the hood, it features isolated room-based WebSocket routing, structured MongoDB data modeling, and strict JWT-secured communication channels.

---

## 🚀 Live Demo & Repository
* **Frontend Deployment:** `[Insert Link]`
* **Backend API Gateway:** `[Insert Link]`

---

## 🛠️ Tech Stack & Architecture

### Frontend
* **Core Framework:** React.js (ES6+)
* **Styling & Design System:** Tailwind CSS + NES.css (Retro 8-bit components)
* **State Management:** Context API / Retro-state triggers
* **Typography:** Google Fonts (Press Start 2P, Pixelify Sans)

### Backend & Infrastructure
* **Runtime Environment:** Node.js & Express.js
* **Real-Time Layer:** Socket.io (WebSockets)
* **Database:** MongoDB (Mongoose ODM)
* **Authentication:** JSON Web Tokens (JWT) with HTTP-only cookies

---

## ✨ Core Engineering Features

### 📡 1. Isolated, Room-Based WebSocket Routing
* Engineered scalable bidirectional communication layers utilizing **Socket.io** to power sub-50ms message delivery.
* Implemented strict server/channel isolation, ensuring event broadcasting (messages, media triggers) is contained exclusively within specific active rooms to eliminate data leakage and optimize server memory.

### 👾 2. Live Presence Tracking & Micro-Interactions
* Developed an event-driven presence engine tracking user states (`Online`, `AFK/Idle`, `Offline`).
* Integrated retro low-bit sound effects triggered on incoming messages and live user typing indicators.
* Custom gamified user badges that update dynamic pixel-art animations based on active connection states.

### 💾 3. Optimized Schemas & Cursor-Based Pagination
* Designed a relational, nested MongoDB data structure to manage complex relationships between **Guilds (Servers)**, **Town Squares (Channels)**, and **Users**.
* Implemented cursor-based database pagination for historical chat logs, fetching message histories in optimized batches of 20 to prevent client-side DOM lag and database read overhead during infinite scrolling.

### 🔒 4. Stateful JWT Authentication & Route Guards
* Secured RESTful endpoints and WebSocket handshakes using stateless **JWT Authentication**.
* Enforced role-based access control protecting administrative actions (creating guilds, deleting channels, kick/ban actions).

---

## 🗺️ System Architecture Flow

```text
[ Client Browser ] <---( WebSockets / Socket.io )---> [ Node.js Server ]
        |                                                    |
   (REST APIs)                                         (Mongoose ODM)
        |                                                    |
        v                                                    v
[ JWT Auth Guards ]                                    [ MongoDB Cluster ]
