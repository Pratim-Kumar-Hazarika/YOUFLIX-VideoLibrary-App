import "./PlayVideo.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useVideo } from "../Context/VideoProvider";
import { Toast } from "../Toast/Toast";
import { LeftBar } from "../LeftNavBar/LeftBar";
import { useAuth } from "../Context/AuthProvider";
import axios from "axios";
import {RightDiv} from "../RightVideoDiv/RightDiv";
export function PlayVideo() {
  const [stateofcolor, setColorState] = useState(false);
  const [stateofcolor2, setColorState2] = useState(false);
  const { videoId } = useParams();
  const navigate = useNavigate()
  const {
    state,
    dispatch,
    setList,
    inputText,
    setInput,
    show,
    setShow,
    toastMessage,
    darkMode
  } = useVideo();
  const {login} = useAuth();
  const itemFound = state.data.find((item) => item._id === String(videoId));
  const userId = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch({ type: "HISTORY_VIDEO", payload: itemFound });
   async function sendData(){
      try {
        const res = await axios.post(`https://YouFlixBackend.prratim.repl.co/users/${userId[0]._id}/historyVideos`,{
                _id :itemFound._id
              })
              console.log("sucessfully send to server", res)
      } catch (error) {
        console.log("error occured while sending data")
      }
   }
   return sendData()
  }, [itemFound]);
 async function buttonCLick() {
    if(login){
      if (itemFound) {
        dispatch({ type: "LIKED_VIDEO", payload: itemFound });
        const res = await axios.post(`https://YouFlixBackend.prratim.repl.co/users/${userId[0]._id}/likedVideos`,{
          _id :itemFound._id
        })
        console.log("liked sucessfull", res)
        setColorState(true);
        setColorState2(false);
      
      }
    }else{
      navigate("/login")
    }
 
  }
  function onChangeClickHandler(e) {
    setInput(e.target.value);
  }
  function dislikeClickHanlder() {
    dispatch({ type: "DELETE_VIDEO", payload: itemFound });
    setColorState2(true);
    setColorState(false);
  }
  function MdiThumbUp(props) {
    return (
      <svg
        onClick={buttonCLick}
        style={{ color: stateofcolor && "#3EA6ff" }}
        className="iconify playvideoIcons"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12z"
          fill="currentColor"
        ></path>
      </svg>
    );
  }
  function MdiThumbDown(props) {
    return (
      <svg
        onClick={dislikeClickHanlder}
        style={{ color: stateofcolor2 && "#3EA6ff" }}
        className="iconify playvideoIcons"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31c0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2z"
          fill="currentColor"
        ></path>
      </svg>
    );
  }
  async function checkBoxAddToPlaylistHandler(itemName){
    const {_id} = itemFound
    console.log("the id is", _id)
      try {
        const ifIdExist =state.customplaylists.filter((item)=>item.name === itemName)
        if(ifIdExist[0].video.find((item)=>item._id === itemFound._id)){
          console.log("Video already added to watch later playlist...",state.customplaylists[0])
        }else{
         dispatch({type:"ADD_TO_PLAYLIST",payload:{itemName,itemFound}})
         const res = await axios.post(`https://YouFlixBackend.prratim.repl.co/users/60a64861860c550bce0766eb/playlist/videos`,{
          name :itemName,
          videoId:_id
        })
        }
      } catch (error) {
        console.log("Error while adding the video to the playlist in server..")
      }
    
  }
  async function addClickHandLer(e) {
    try {
      // e.preventDefault();
      dispatch({type:"ADD_NEW_PLAYLIST",payload:inputText})
      const res = await axios.post(`https://YouFlixBackend.prratim.repl.co/users/${userId[0]._id}/playlist`,{
        name :inputText
      })

      if (inputText !== "") {
        state.list.push(inputText);
        setInput("");
      }
    } catch (error) {
      console.log("error while adding playlistr to the server..")
    }
  }
  const [bgopacity,setBgOpacity] = useState(false)
  function showModelHandler(){
    if(login){
      setShow(true)
      setBgOpacity(true)
    }else{
      navigate("/login")
    }
  }
  function closeModelHandler(){
    setShow(false)
    setBgOpacity(false)
  }

  function idMatcherForCheckBox(itemName){
    const itemIs =state.customplaylists.filter((item)=>item.name === itemName)
    if(itemIs[0].video.find((item)=>item._id === itemFound._id)){
      return true
    }return false
  }

  async function removeFromPlaylistHandler(itemName){
    const {_id} = itemFound
    try {
      dispatch({type:"REMOVE_FROM_PLAYLIST",payload:{itemName,itemFound}})
      const response = await axios.delete(
        `https://YouFlixBackend.prratim.repl.co/users/${userId[0]._id}/playlist/videos`,
      {data:{ name: itemName,videoId:_id} } 
      );
      console.log("video  is deleted from the server playlist....",response)
    } catch (error) {
      console.log("Error while deleting video from the playlist...")
    }
  
  }
  return (
    <div className="main_video_playing_screen" >
      <div className="model" style={{ display: show ? "" : "none",opacity :bgopacity ?"1":"1" }}>
        <div className="div1">
          <h3>Save To..</h3>
          <button className="btn_close" onClick={closeModelHandler}>
            <span
              class="iconify closeIconify"
              data-icon="akar-icons:cross"
              data-inline="false"
            ></span>
          </button>
        </div>
        {state.list.map((itemName) => {
          console.log("i m list.....",state.list)
          return (
            <div className="input1">
              <input type="checkbox"  checked={idMatcherForCheckBox(itemName)} onChange={()=>checkBoxAddToPlaylistHandler(itemName)} />
              <div style={{cursor:"pointer"}}
               onClick={()=>removeFromPlaylistHandler(itemName)}>
              <span class="iconify crossIcon" data-icon="mdi:close-box" data-inline="false"></span>
              </div>
              <label className="label"> {itemName} </label>
            </div>
          );
        })}
        <div className="modeladd">
            <input
              className="add_playlist"
              type="input"
              name="name"
              placeholder="New Playlist..."
              value={inputText}
              onChange={onChangeClickHandler}
            />
          <button className="add_playlist_btn" onClick={()=>addClickHandLer(inputText)}>
            CREATE
          </button>
        </div>
      </div>
      <div className="leftBar">
        <LeftBar />
      </div>
      <div className="div2" style={{opacity :bgopacity ?"0.3":"1"}}>
        <div className="video">
          <iframe
            frameBorder="0"
            className="videoPlayingScreen"
            src={`${itemFound.url}?autoplay=1&mute=1"`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="videoDiv">
            <div className="video_contents_">
              <h3>{itemFound.name}</h3>
              <div className="view_years">
                <div className="viewsyears">
                  <span>{itemFound.views}</span>
                </div>
                <div className="likes_controls">
                  <div className="like_items">
                    <div className="likeButton">
                      <MdiThumbUp />
                      <span
                        className="numbers_liked"
                        style={{ marginTop: "-0.3rem" }}
                      >
                       444k
                      </span>
                    </div>
                  </div>
                  <div className="like_items">
                    <MdiThumbDown />
                    <span className="numbers">31k</span>
                  </div>
                  <div className="like_items">
                    <span
                      class="iconify playvideoIcons"
                      data-icon="mdi:share"
                      data-inline="false"
                    ></span>
                    <span className="numbers">SHARE</span>
                  </div>
                  <div onClick={showModelHandler} className="like_items">
                    <span
                      class="iconify playvideoIcons"
                      data-icon="ic:outline-playlist-add"
                      data-inline="false"
                    ></span>
                    <span className="numbers">SAVE</span>
                  </div>
                  <div className="like_items">
                    <span
                      class="iconify playvideoIcons"
                      data-icon="mdi:dots-horizontal"
                      data-inline="false"
                    ></span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "20px",
                  borderTop: "1px solid rgba(225,225,225,0.1)",
                  overflow: "hidden"
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <img
                    className="image_avatar_play"
                    src={itemFound.image}
                    alt="avatar"
                  />
                </div>
                <span className="artist__name">{itemFound.artist} ♪</span>
              </div>
            </div>
          </div>
          {toastMessage && <Toast />}
        </div>
        <RightDiv/>
      </div>
    </div>
  );
}
