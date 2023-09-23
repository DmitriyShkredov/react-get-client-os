import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [osName, setOsName] = useState("unknown");

  useEffect(() => {
    setOsName(navigator.userAgent);
  }, []);

  return <div className="App">Your OS: {osName}</div>;
}

export default App;
