import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default function App() {
  const dontgo = () => console.log("Please don't go");
  useBeforeLeave(dontgo);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}
