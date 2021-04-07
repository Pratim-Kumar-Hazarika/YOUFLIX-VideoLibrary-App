import { useState } from "react";
import { Blues } from "./Genres/Blues";
import { Metal } from "./Genres/Metal";
import { Rock } from "./Genres/Rock";
import { Sobs } from "./Genres/Sobs";
import "./Genre.css";

export const Genre = () => {
  const [route, setRoute] = useState("sobs");
  return (
    <div className="genre_main">
      <div className="genre">
        <button className="genre_btn" onClick={() => setRoute("blues")}>
          BLUES
        </button>
        <button className="genre_btn" onClick={() => setRoute("metal")}>
          METAL
        </button>
        <button className="genre_btn" onClick={() => setRoute("sobs")}>
          SAD
        </button>
        <button className="genre_btn" onClick={() => setRoute("rock")}>
          ROCK
        </button>
      </div>
      <div>
        {route === "blues" && <Blues />}
        {route === "metal" && <Metal />}
        {route === "sobs" && <Sobs />}
        {route === "rock" && <Rock />}
      </div>
    </div>
  );
};
