#  Examination Portal ESM 

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Express](https://img.shields.io/badge/Express.js-4.x-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen?logo=mongodb)
![Google Gemini](https://img.shields.io/badge/GenAI-Gemini-yellow?logo=google)

Welcome to the **Examination Portal ESM**! This is a full-stack web application for managing online exams, built with the MERN stack (MongoDB, Express, React, Node.js). Now featuring **Google Gemini (GenAI) integration** for AI-powered answer evaluation! 

---

##Features
- Teacher and Student roles
- Create, assign, and attempt tests
- View results and analytics
- **AI Evaluation**: Get instant feedback on answers using Google Gemini

---

## Getting Started

### 1. Clone the Repository
```bash
https://github.com/your-username/Examination-PORTAL-ESM-.git
cd Examination-PORTAL-ESM-
```

### 2. Backend Setup
```bash
npm install
```
- Create a `.env` file in the root directory:
  ```
  GEMINI_API_KEY=your_google_gemini_api_key_here
  ```
- Start the backend:
  ```bash
  npm start
  ```

### 3. Frontend Setup
```bash
cd client/esm-client
npm install
npm start
```

---

## GenAI (Gemini) Integration
- The backend exposes `/api/evaluate` for AI-powered answer evaluation.
- The frontend displays GenAI feedback on the result page.

---

## Project Structure
```
Examination-PORTAL-ESM-/
  ├── client/esm-client/    # React frontend
  ├── routes/              # Express routes
  ├── model/               # Mongoose models
  ├── middleware/          # Auth & other middleware
  ├── config/              # DB config
  ├── utils/               # Utility functions
  ├── index.js             # Backend entry point
```

---

## Tech Stack
- **Frontend:** React, Redux, Ant Design
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **AI:** Google Gemini (GenAI)

---

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## Contact
For support, contact [your-email@example.com](mailto:your-email@example.com)

---

## Show your support
Give a if you like this project! 
email- muditykumar414@gmail.com
