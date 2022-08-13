import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [txt, settxt] = useState("hi");
  const change = (event) => {
    settxt(event.target.value);
  };
  return (
    <div className="App">
      <input onChange={change} />
      {txt}
    </div>
  );
}
