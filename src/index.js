import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { VideoProvider } from "./VideoProvider";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <VideoProvider>
        <App />
      </VideoProvider>
    </Router>
  </StrictMode>,
  rootElement
);
