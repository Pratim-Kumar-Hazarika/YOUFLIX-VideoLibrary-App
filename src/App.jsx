import { useState } from "react";
import { Navbar } from "./Navbar";
import "./styles.css";
import { Home } from "./Home";
import { Genre } from "./Genre";
import Iconify from "@iconify/iconify";
import { LeftBar } from "./LeftBar";
import { Routes, Route, useParams } from "react-router-dom";

import { LikedVideo } from "./LikedVideo";
import { PlayVideo } from "./PlayVideo";
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
        <Routes>
          <Route path="/video/:videoId" element={<PlayVideo />} />
        </Routes>
      </div>
    </>
  );
}
