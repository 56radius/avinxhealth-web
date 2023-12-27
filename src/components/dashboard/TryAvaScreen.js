import React from "react";

import { useNavigate } from "react-router-dom";

import "../.././assets/dashboard/assets/css/try_ava.css";

function TryAvaScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        <button
          style={{ borderWidth: 0, backgroundColor: "white" }}
          onClick={() => navigate("/dashboard")}
        >
          AVA(Avinx Virtual Assistant)
        </button>{" "}
      </h1>
      <div id="chat-messages"></div>
      <textarea id="message-input"></textarea>
    </div>
  );
}

export default TryAvaScreen;
