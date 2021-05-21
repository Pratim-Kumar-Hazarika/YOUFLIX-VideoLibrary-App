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
import { SignUp } from "./Login/SignUp";
import { PlayList } from "./PlayListScreen/PlayList";
import { PrivateRoute } from "./Login/PrivateRoute/PrivateRoute";
import { useVideo } from "./Context/VideoProvider";
import { Hiphop } from "./Genres/Hiphop";
import { Rap } from "./Genres/Rap";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "./Context/AuthProvider";

export default function App() {
  const { darkMode ,dispatch} = useVideo();
  const { login, signOutHandler } = useAuth()
  useEffect(()=>{
      async function getData(){
        const userId = JSON.parse(localStorage.getItem("user"));
          try {
            const {data:{videos}} = await axios.get("https://youflixbackend.prratim.repl.co/videos");
            dispatch({type:"DATA_FROM_SERVER",payload:videos})
            const {data:{user:{likedVideos}}} = await axios.get(`https://YouFlixBackend.prratim.repl.co/users/${userId[0]._id}/likedVideos`)
            dispatch({type:"LIKED_VIDEOS_FROM_SERVER",payload:likedVideos})
            const {data:{user:{historyVideos}}}= await axios.get(`https://YouFlixBackend.prratim.repl.co/users/${userId[0]._id}/historyVideos`)
            dispatch({type:"HISTORY_VIDEOS_FROM_SERVER",payload:historyVideos})
            const {data:{user:{playlists}}} = await axios.get(`https://YouFlixBackend.prratim.repl.co/users/${userId[0]._id}/playlist`)
            dispatch({type:"PLAYLIST_FROM_SERVER",payload:playlists})
            const playlistNames = playlists.map(item=>item.name)
            dispatch({type:"PLAYLIST_NAMES",payload:playlistNames})
          } catch (error) {
            console.log("error")
          }
      }
      return getData()
  },[login])
  return (
   
      <div
        className="App"
        style={{
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black"
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/video/:videoId" element={<PlayVideo />} />
          <Route path="/blues" element={<Blues />} />
          <Route path="/sad" element={<Sobs />} />
          <Route path="/rock" element={<Rock />} />
          <Route path="/metal" element={<Metal />} />
          <Route path ="/hiphop" element={<Hiphop/>}/>
          <Route path ="/rap" element={<Rap/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/likedvideo" element={<LikedVideo />} />
          <PrivateRoute path="/historyvideo" element={<HistoryVideo />} />
          <PrivateRoute path="/playlist" element={<PlayList />} />
        </Routes>
      </div>
    
  );
}
