import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import { VideoProvider } from "./Context/VideoProvider";
import { AuthProvider } from "./Context/AuthProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
