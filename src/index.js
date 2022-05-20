import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import Youtube from "./service/youtube";
import Client from "./service/youtube copy"
import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

// const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
const youtube = new Client(httpClient);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
reportWebVitals();
