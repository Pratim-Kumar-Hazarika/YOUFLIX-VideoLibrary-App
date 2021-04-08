import { useState } from "react";
import { Navbar } from "./Navbar";
import "./styles.css";
import { Home } from "./Home";
import { Genre } from "./Genre";
import Iconify from "@iconify/iconify";
import { Routes, Route, useParams } from "react-router-dom";
import { PlayVideo } from "./PlayVideo";
export default function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/video/:videoId" element={<PlayVideo />} />
        </Routes>
      </div>
    </>
  );
}
