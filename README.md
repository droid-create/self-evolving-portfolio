# 📂 Self-Evolving Portfolio 🚀

A dynamic, self-updating portfolio that automatically syncs your GitHub repositories and allows you to manage projects and skills in real time via a beautiful, interactive UI.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Live Demo](https://img.shields.io/badge/demo-live-blue)

---

## 🔥 Key Features

* 🔄 **Automatic GitHub Sync:** Pulls public repositories directly from your GitHub profile.
* ✅ **CRUD Functionality:** Add, view, and delete projects and skills.
* 🎨 **Responsive UI:** Built with React and styled using Tailwind CSS.
* ⚡ **Live API Integration:** Seamlessly connected frontend and backend with environment-specific configurations.
* 🛡️ **Future Ready:** Authentication layer and deployment-ready architecture.

---

## 🛠️ Tech Stack

* **Frontend:** React, Axios, Tailwind CSS, Vercel
* **Backend:** Node.js, Express.js, MongoDB, Mongoose, Render
* **API Client:** Postman (for API testing)
* **Version Control:** GitHub (Monorepo setup)

---

## 📦 Folder Structure

```
self-evolving-portfolio/
🕌— backend/
│   🕌— controllers/
│   🕌— models/
│   🕌— routes/
│   ├— server.js
│   └— .env
🕌— frontend/
│   🕌— public/
│   🕌— src/
│   ├— .env
│   └— package.json
└— README.md
```

---

## 🚀 Live Demo

* **Frontend (Vercel):** [https://self-evolving-portfolio.vercel.app/](https://self-evolving-portfolio.vercel.app/)
* **Backend (Render):** [https://self-evolving-portfolio.onrender.com/](https://self-evolving-portfolio.onrender.com/)

---

## 💻 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/self-evolving-portfolio.git
cd self-evolving-portfolio
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your-mongo-db-connection-string
GITHUB_USERNAME=your-github-username
```

Start Backend:

```bash
node server.js
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file:

```env
REACT_APP_API_URL=http://localhost:5000
```

Start Frontend:

```bash
npm start
```

---

## 🌍 Deployment Guide

### Backend on Render

* Set root directory to `backend`
* Add environment variables: `PORT`, `MONGO_URI`, `GITHUB_USERNAME`

### Frontend on Vercel

* Set root directory to `frontend`
* Add environment variable: `REACT_APP_API_URL` = your Render backend URL

---

## 🛡️ Future Enhancements

* 🔐 Add Authentication (JWT/Session-based)
* 🎨 UI/UX Polishing (Dark Mode, Animations)
* 📧 Contact Form Integration
* 🗃️ Skill Categories and Tagging
* 🌐 Custom Domain Mapping

---

## 🤝 Contribution

1. Fork this repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Submit a pull request.

---

## 📈 GitHub Profile Integration

You can showcase this project directly on your GitHub profile README:

```markdown
### 💡 Self-Evolving Portfolio

Check out my live self-updating portfolio here:

[![Self-Evolving Portfolio](https://img.shields.io/badge/demo-live-blue)](https://self-evolving-portfolio.vercel.app/)
```

---

## 📧 Contact

For suggestions or collaborations, reach out to:

* **GitHub:** [droid-create](https://github.com/droid-create)
* **Portfolio:** [self-evolving-portfolio.vercel.app](https://self-evolving-portfolio.vercel.app)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
