import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [osName, setOsName] = useState("unknown");

  useEffect(() => {
    const checkOs = (agent) => {
      if (agent.indexOf("Windows") > 0) setOsName("Windows");
      if (agent.indexOf("Macintosh") > 0) setOsName("Macintosh");
      if (agent.indexOf("Linux") > 0) setOsName("Linux");
      if (agent.indexOf("Android") > 0) setOsName("Android");
      if (agent.indexOf("iPhone") > 0) setOsName("iPhone OS");
    };
    checkOs(navigator.userAgent);
  }, []);

  return <div className="App">Your OS: {osName}</div>;
}

export default App;
