import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useHover = (onHover) => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

export default function App() {
  const touchHere = () => console.log("Hover Over😁");
  const title = useHover(touchHere);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
