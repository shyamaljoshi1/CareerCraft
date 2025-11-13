# Career Craft - A Dynamic Career Roadmap Hub

Career Craft is an innovative and comprehensive web application engineered to solve the "information overload" for aspiring tech professionals. It provides a centralized, curated platform featuring domain-specific career roadmaps, interactive quizzes, and personalized user dashboards to guide and validate their learning journey.

-----

🏗️ \#\# Architectural Diagram
<img width="1024" height="747" alt="13" src="https://github.com/user-attachments/assets/516ee1e8-48f4-4c3a-a778-b084b3dcabf7" />



-----

✨ \#\# Features

  * **User Authentication:** Secure user registration, login, and profile management using JSON Web Tokens (JWT) and `bcryptjs` hashing.
  * **Dynamic Roadmaps:** A database-driven system that serves expert-curated career paths for multiple IT domains (Cybersecurity, ML, etc.).
  * **Interactive Quizzes:** Test knowledge with domain-specific quizzes. Scores and results are saved to the user's profile.
  * **Profile Dashboard:** A personal dashboard for users to update their details and view their complete quiz history.
  * **High Availability:** The backend is load-balanced across two Node.js server instances via Nginx to ensure reliability, uptime, and handle high traffic.
  * **Admin Panel:** A secure admin-only section for creating, updating, and managing all domain and quiz content directly in the database.

-----

🛠️ \#\# Tech Stack

  * **Frontend:** React.js, Vite
  * **Backend:** Node.js, Express.js
  * **Database:** MongoDB, Mongoose
  * **Load Balancer:** Nginx
  * **Authentication:** `jsonwebtoken`, `bcryptjs`
  * **Package Manager:** npm

-----

📋 \#\# Prerequisites

Before you begin, ensure you have the following installed:

  * **Node.js** (v18.0.0 or higher)
  * **npm** (v9.0.0 or higher)
  * **Nginx**

-----

🚀 \#\# Getting Started

To get a local copy up and running, follow these simple steps.

### 1\. Clone the Repository

```bash
git clone https://github.com/your-username/career-craft.git
```

### 2\. Running the Application

This setup requires running four separate processes in different terminal windows/tabs.

**🖥️ Terminal 1: Start Backend Server 1**

```bash
cd career-craft-backend
npm install
nodemon server.js
# Server runs on http://localhost:5001
```

**🖥️ Terminal 2: Start Backend Server 2**

```bash
cd career-craft-backend-copy
npm install
nodemon server.js
# Server runs on http://localhost:5002
```

**🖥️ Terminal 3: Start Nginx Load Balancer**

```bash
cd nginx/nginx-1.29.1/
./nginx.exe -c conf/load-balancer.conf
# This starts Nginx, forwarding API requests to ports 5001 or 5002
```

**🖥️ Terminal 4: Start Frontend Server**

```bash
cd career-craft-frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
```

### 3\. Access the Application

Once all servers are running, open your browser and go to:
**http://localhost:5173**

-----

📁 \#\# Project Structure

```
CareerCraft/
├── career-craft-backend/         # Primary backend server (port 5001)
├── career-craft-backend-copy/    # Secondary backend server (port 5002)
├── career-craft-frontend/        # Frontend React application (port 5173)
├── nginx/                        # Nginx configuration files
│   └── .../
│       └── conf/
│           └── load-balancer.conf
└── README.md
```

-----

📸 \#\# Screenshots

  * Login Page

    <img width="684" height="772" alt="image" src="https://github.com/user-attachments/assets/3c98b0a8-330f-47a8-86dd-3f63cf9dfdb1" />
  * Sign Up Page
    <img width="574" height="919" alt="image" src="https://github.com/user-attachments/assets/37e707fd-ec0c-4c72-b6d4-1abfa1a5d433" />

  * Home Page (Domain Listing)
    <img width="1900" height="912" alt="image" src="https://github.com/user-attachments/assets/3e233c6b-91ee-4cf5-915d-eac75d8975d7" />
    <img width="1878" height="883" alt="image" src="https://github.com/user-attachments/assets/debe6091-ae3b-4220-aaa4-74011be8fc9e" />


  * Domain Page (Roadmap View)
    <img width="1889" height="905" alt="image" src="https://github.com/user-attachments/assets/72a2acde-c37d-49c3-951b-b9881c35bdb9" />
    <img width="1920" height="910" alt="image" src="https://github.com/user-attachments/assets/acf96e78-2467-4641-93e6-176576f1dca1" />


  * Quiz Page
    
    <img width="855" height="793" alt="image" src="https://github.com/user-attachments/assets/495346fd-fd38-402b-98f2-59724643f6f0" />

  * Profile Page 
    <img width="1919" height="806" alt="image" src="https://github.com/user-attachments/assets/59f7a8b6-7d14-47fe-a274-d73af6a62628" />

 
