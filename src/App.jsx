import { Navbar } from "./Navbar/Navbar";
import "./styles.css";
import { Home } from "./Home";
import Iconify from "@iconify/iconify";
import { Routes, Route } from "react-router-dom";
import { PlayVideo } from "./VideoPlayingScreen/PlayVideo";
import { Blues } from "./Genres/Blues";
import { Sobs } from "./Genres/Sobs";
import { Rock } from "./Genres/Rock";
import { Metal } from "./Genres/Metal";
import { Genre } from "./SongGenre/Genre";
import { LikedVideo } from "./LikedVideos/LikedVideo";
import { HistoryVideo } from "./HistoryVideos/HistoryVideo";
import { Login } from "./Login/Login";
import { PlayList } from "./PlayList";
import { PrivateRoute } from "./Login/PrivateRoute/PrivateRoute";

export default function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/video/:videoId" element={<PlayVideo />} />
          <Route path="/blues" element={<Blues />} />
          <Route path="/sad" element={<Sobs />} />
          <Route path="/rock" element={<Rock />} />
          <Route path="/metal" element={<Metal />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/likedvideo" element={<LikedVideo />} />
          <PrivateRoute path="/historyvideo" element={<HistoryVideo />} />
          <PrivateRoute path="/playlist" element={<PlayList />} />
        </Routes>
      </div>
    </>
  );
}
