import { useState } from "react";
import { Navbar } from "./Navbar";
import "./styles.css";
import { Home } from "./Home";
import { Genre } from "./Genre";
import Iconify from "@iconify/iconify";
import { LeftBar } from "./LeftBar";

import { LikedVideo } from "./LikedVideo";
export default function App() {
  const [route, setRoute] = useState("home");
  return (
    <>
      <div className="App">
        <div>
          <Navbar setRoute={setRoute} />
        </div>
        <div style={{ padding: "1rem", marginTop: "5rem" }}>
          <LeftBar />
        </div>
        <div>
          {route === "home" && <Home />}
          {route === "genre" && <Genre />}
          {route === "likedVideos" && <LikedVideo />}
        </div>
      </div>
    </>
  );
}
