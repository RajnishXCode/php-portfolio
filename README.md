# React + PHP Portfolio Project

This project is a simple **React frontend** with a **PHP backend** for handling contact form submissions.

---

## Frontend (React-Vite)
- Hosted on **Vercel**: [https://php-portfolio-delta.vercel.app/](https://php-portfolio-delta.vercel.app/)  
- Built using React and deployed directly to Vercel.

---

## 🖥️ Backend (PHP)
The backend is a single **PHP script** located in the `Backend/` folder of this repository.  
It is designed to process **form submissions** (name, email, message) and return responses in JSON format, and save the submissions to a file on the server.

---

## Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/RajnishXCode/php-portfolio.git
   cd php-portfolio
   ```

2. Install dependencies (for the frontend):
   ```bash
   cd frontend
   npm install
   ```

3. Set up the backend:
   - Make sure you have a local server (e.g. NGINX) running.
   - Place the `messages.php` file in the server's root directory.

4. Start the development server (for the frontend):
   ```bash
   npm start
   ```

  Open your browser and navigate to `http://localhost:5173` to view the frontend.

  You can submit the contact form, and the submissions will be saved in the `submissions.json` file on the server.

