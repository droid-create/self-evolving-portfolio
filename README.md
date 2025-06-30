🚀 Self-Evolving Portfolio (Local Deployment)
A dynamic, self-updating developer portfolio built with Node.js, React, MongoDB, and Tailwind CSS. It automatically syncs your GitHub projects and allows you to add, update, and delete projects and skills — all running locally on your system.

🌟 Features
🔄 GitHub project auto-sync (one-click)

➕ Add, update, and delete projects and skills

🎨 Modern, responsive UI with Tailwind CSS

✅ Real-time toast notifications for smooth user experience

🖥️ Runs locally on your machine (not deployed)

🛠️ Tech Stack
Frontend: React, Tailwind CSS, Axios

Backend: Node.js, Express.js, MongoDB

External API: GitHub API Integration

📂 Local Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/droid-create/self-evolving-portfolio.git
2. Backend Setup
bash
Copy
Edit
cd self-evolving-portfolio/backend
npm install
node server.js
3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm start
⚙️ Environment Variables
Backend .env
env
Copy
Edit
MONGO_URI=your_local_mongodb_connection_string
PORT=5000
Frontend .env
env
Copy
Edit
REACT_APP_API_BASE_URL=http://localhost:5000
🚀 GitHub Sync
Click the 🔄 Sync GitHub Projects button in the frontend to pull your public repositories automatically into your portfolio.

📎 License
This project is licensed under the MIT License.
You can freely use, modify, and distribute this project.

🛡️ Disclaimer
This project is not deployed online. It is intended for local use only.
Please ensure your .env files are not pushed to public repositories.

📧 Contact
Divesh
GitHub: droid-create

✅ Future Enhancements (Optional)
 Add delete confirmation modals

 Add authentication (local session)

 Improve mobile responsiveness

 Add custom animations and loading states

✅ Deliverables:
📄 Clean, local-first README

🔒 Proper license and security warning

🛠️ Practical setup steps

