import { ChattGatorProvider } from "chat-ui-kit";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChattGatorProvider
      value={{
        projectConfig: {
          projectId: "6303ce473c0028aeb8e79460",
          projectSecret: "aWSocXyx_62V",
        },
        user: {
          projectId: "6303ce473c0028aeb8e79460",
          name: "Test User 2",
          userId: "ajshdhd2",
          avatar: "https://avatars.githubusercontent.com/u/80971056",
          userName: "testtest",
          bio: "Hey there, I'm using Chat app",
        },
      }}>
      <App />
    </ChattGatorProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
