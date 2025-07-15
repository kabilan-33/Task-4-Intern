![Uploading 460309025-dd1cb08a-2334-4fe2-a6f3-2e8ab2a49311 (1).png…]()
![Uploading 460309025-dd1cb08a-2334-4fe2-a6f3-2e8ab2a49311.png…]()
# Task-4-Intern🌐 Time Tracking & Productivity Analytics Extension — CodTech Internship Task 4

📌 Task Objective  
This project is a part of the Full Stack Development Internship by CodTech.  
Task 4 Goal:

✅ Develop a Chrome Extension that tracks time spent on websites, classifies them as productive/unproductive, and provides analytics.

🧠 What This Extension Does  
📥 Tracks time spent on each website visited by the user in Chrome  
🔗 Sends time data to a backend server (Node.js + MongoDB)  
📊 Provides a dashboard showing:
- Total time per website
- Productivity classification
- Weekly summary report

🔐 Stores and retrieves data from a MongoDB database

💡 Displays time usage directly in the extension popup, with options to open a detailed dashboard

🔧 Tech Stack Used  
| Layer       | Technology                           |
|------------|--------------------------------------|
| Frontend   | Chrome Extension (HTML, CSS, JS)    |
| Backend    | Node.js + Express                   |
| Database   | MongoDB (Mongoose)                  |
| Deployment | Localhost (Chrome & Node server)    |

📂 Folder Structure
time-track-ext/
├── backend/
│ ├── server.js --> Node API server
│ ├── models/
│ │ └── TimeEntry.js --> Mongoose schema
│ └── .env --> MongoDB URI & config
└── extension/
├── manifest.json --> Extension manifest
├── background.js --> Background script for tracking
├── content.js --> Placeholder for content script
├── popup.html --> Popup UI
├── popup.css --> Popup styling
└── icons/
└── icon.png --> Extension icon

pgsql
Copy
Edit

🚀 How to Build & Run Locally  
✅ Step 1: Install & Start MongoDB  
- Install MongoDB Community Edition from: https://www.mongodb.com/try/download/community
- Start the MongoDB server (locally or with MongoDB Atlas)

✅ Step 2: Clone the Repository & Install Backend Dependencies
```bash
cd backend
npm install
✅ Step 3: Create a .env file in the backend/ directory:

ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/time-tracker
✅ Step 4: Start the Backend API Server

bash
Copy
Edit
node server.js
You should see API running on port 5000.

✅ Step 5: Load the Chrome Extension

Open Chrome → go to chrome://extensions/

Enable Developer Mode

Click "Load unpacked" and select the extension/ folder inside the project

✅ Step 6: Test the Extension

Visit websites in Chrome; the extension will track time and send data to your API.

Open your extension’s popup → see time data.

Visit http://localhost:5000/api/report/testuser in your browser to view raw time logs.

🧪 Optional: Check Data in MongoDB

Connect using MongoDB Compass or mongosh and look for the timeentries collection inside the time-tracker database.

🙌 Completed By
Intern Name: Kabilan.M
Internship: CodTech – Full Stack Development
Task: Task 4 – Chrome Extension for Time Tracking
Status: ✅ Completed

About
This extension helps users understand how they spend time online by tracking website usage and visualizing productivity.

Resources

Chrome Extensions Docs

Express Docs

Mongoose Docs

Languages

JavaScript

HTML

CSS

yaml
Copy
Edit

---

Would you like a version with screenshots or a GitHub-flavored version with badges?








Ask ChatGPT

| Layer       | Technology                           |
|------------|--------------------------------------|
| Frontend   | Chrome Extension (HTML, CSS, JS)    |
| Backend    | Node.js + Express                   |
| Database   | MongoDB (Mongoose)                  |
| Deployment | Localhost (Chrome & Node server)    |

📂 Folder Structure
