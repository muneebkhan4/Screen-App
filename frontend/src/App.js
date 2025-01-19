import React, { useState } from "react";
import "./App.css";
import Screen1 from "./Screen1"; // Import Screen1 component

function App() {
  const [currentScreen, setCurrentScreen] = useState("welcome");

  const renderScreen = () => {
    switch (currentScreen) {
      case "screen1":
        return <Screen1 />; // Render Screen1 component
      case "screen2":
        return <div>This is screen 2.</div>; // Placeholder for Screen2
      case "screen3":
        return <div>This is screen 3.</div>; // Placeholder for Screen3
      default:
        return <div>Welcome! Select a screen.</div>;
    }
  };

  return (
    <div className="container">
      <div className="left-pane">
        <ul>
          <li>
            <button onClick={() => setCurrentScreen("screen1")}>Screen 1</button>
          </li>
          <li>
            <button onClick={() => setCurrentScreen("screen2")}>Screen 2</button>
          </li>
          <li>
            <button onClick={() => setCurrentScreen("screen3")}>Screen 3</button>
          </li>
        </ul>
      </div>
      <div className="right-pane">
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;
