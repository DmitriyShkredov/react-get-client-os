import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [os, setOs] = useState("unknown");

  useEffect(() => {
    const check = (agent) => {
      if (agent.indexOf("Windows") > 0) setOs("Windows");
      if (agent.indexOf("Macintosh") > 0) setOs("Mac");
      if (agent.indexOf("Linux") > 0) setOs("Linux");
      if (agent.indexOf("Android") > 0) setOs("Android");
      if (agent.indexOf("iPhone") > 0) setOs("iOS");
    };
    check(navigator.userAgent);
  }, []);
  return <div className="App">Your OS: {os}</div>;
}

export default App;
