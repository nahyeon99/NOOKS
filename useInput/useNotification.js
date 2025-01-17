import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
    return fireNotif;
  };
};

export default function App() {
  const triggerNotif = useNotification("Can I steal your computer?", {
    body: "I love you mac",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}> Hello</button>
    </div>
  );
}
