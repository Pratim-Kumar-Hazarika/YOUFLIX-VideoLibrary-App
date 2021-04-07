import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { VideoProvider } from "./VideoProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <VideoProvider>
      <App />
    </VideoProvider>
  </StrictMode>,
  rootElement
);
