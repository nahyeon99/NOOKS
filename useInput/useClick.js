import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onclick) => {
  if (typeof onclick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    element.current.addEventListener("click", onclick);
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onclick);
      }
    };
  }, []);
  return element;
};

export default function App() {
  const sayHello = () => console.log("Say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
