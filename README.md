# Screen App

This project consists of a Node.js backend and a React frontend. The app has three screens, and the user can switch between them. Each screen fetches data from the backend.

## Project Structure

```
/my-screen-app
├── server.js           # Backend API server (Node.js)
├── package.json        # Backend dependencies
├── frontend/           # React frontend
│   ├── package.json    # Frontend dependencies
│   ├── public/
│   ├── src/
│   └── ...             # Other React files
└── README.md           # Project documentation
```

## Prerequisites

To run the project, you need:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

Follow these steps to set up the project:

### Backend

1. **Navigate to the backend directory** (where `server.js` is located):
   ```bash
   cd /path/to/your/project
   ```

2. **Install backend dependencies**:
   ```bash
   npm install
   ```

3. **Start the backend server**:
   ```bash
   node server.js
   ```

   The server should now be running and will listen for requests at `http://localhost:5000` (or whatever port you specified in `server.js`).

### Frontend

1. **Navigate to the frontend directory** (where `package.json` is located):
   ```bash
   cd /path/to/your/project/frontend
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   ```

3. **Start the frontend application**:
   ```bash
   npm start
   ```

   This will open the frontend app in your browser at `http://localhost:3000`.

## How to Use

1. When you run both the backend and frontend servers, the app will load in the browser.
2. You can click on the sidebar buttons to switch between "Screen 1", "Screen 2", and "Screen 3". Each screen will make requests to the backend to fetch and display data.

### Troubleshooting

- If you face issues with missing dependencies, run `npm install` in both the frontend and backend directories.
- If the server doesn’t start, check that you have Node.js installed correctly.
