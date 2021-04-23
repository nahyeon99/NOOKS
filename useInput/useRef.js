import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const potato = useRef();
  useEffect(() => {
    setTimeout(() => potato.current.focus(), 5000);
  }, [potato]);

  return (
    <div className="App">
      <div>Hello</div>
      <input ref={potato} placeholder="la" />
    </div>
  );
}
