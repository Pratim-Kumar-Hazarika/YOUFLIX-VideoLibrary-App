import "./PlayVideo.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useVideo } from "../Context/VideoProvider";
import { Toast } from "../Toast/Toast";
import { LeftBar } from "../LeftNavBar/LeftBar";
export function PlayVideo() {
  const [stateofcolor, setColorState] = useState(false);
  const [stateofcolor2, setColorState2] = useState(false);
  const [counter, setCounter] = useState(389);
  const [counter2, setCounter2] = useState(99);
  const { videoId } = useParams();
  const {
    state,
    dispatch,
    list,
    setList,
    inputText,
    setInput,
    show,
    setShow,
    toastMessage,
    darkMode
  } = useVideo();

  const itemFound = state.videodata.find((item) => item.id === Number(videoId));
  console.log("I am the item you wanted", itemFound);
  const metalBlues = state.videodata.filter(
    (item) =>
      item.genre === "sobs" || item.genre === "metal" || item.genre === "rock"
  );
  useEffect(() => {
    dispatch({ type: "HISTORY_VIDEO", payload: itemFound });
  }, [itemFound]);

  function buttonCLick() {
    if (itemFound) {
      dispatch({ type: "LIKED_VIDEO", payload: itemFound });
      setColorState(true);
      setColorState2(false);
      setCounter((e) => ++e);
      console.log("i m dispatched", { itemFound });
    }
  }

  function onChangeClickHandler(e) {
    setInput(e.target.value);
  }
 

  function dislikeClickHanlder() {
    dispatch({ type: "DELETE_VIDEO", payload: itemFound });
    setColorState2(true);
    setColorState(false);
    setCounter((e) => --e);
    setCounter2((e) => ++e);
  }

  function MdiThumbUp(props) {
    return (
      <svg
        // onClick={onbuttonCLick}
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
function addToPlaylistClickHandler(){
  console.log("clicked on playlist")
  console.log("the item found from checkbox is",itemFound)
  dispatch({type:"ADD_TO_PLAYLIST",payload:{itemFound,itemName:"Watch Later"}})
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
  function checkBoxAddToPlaylistHandler(itemName){
  dispatch({type:"ADD_TO_PLAYLIST",payload:{itemName,itemFound}})
 
  }
  function addClickHandLer(e) {
    // e.preventDefault();
       dispatch({type:"ADD_NEW_PLAYLIST",payload:inputText})
       console.log("the input text issssss",inputText)
    if (inputText !== "") {
      setList([...list, inputText]);
      setInput("");
    }
  }
  return (
    <div className="main_video_playing_screen">
      <div className="model" style={{ display: show ? "" : "none" }}>
        <div className="div1">
          <h3>Save To..</h3>
          <button className="btn_close" onClick={() => setShow(false)}>
            <span
              class="iconify closeIconify"
              data-icon="akar-icons:cross"
              data-inline="false"
            ></span>
          </button>
        </div>
        <div className="input1">
          <input type="checkbox" onClick={addToPlaylistClickHandler}/>
          <label>Watch Later</label>
        </div>
        {list.map((itemName) => {
          return (
            <div className="input1">
              <input type="checkbox" onClick={()=>checkBoxAddToPlaylistHandler(itemName)} />
              <label> {itemName} x</label>
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
      <div className="div2">
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
                        {counter}
                      </span>
                    </div>
                  </div>
                  <div className="like_items">
                    <MdiThumbDown />
                    <span className="numbers">{counter2}</span>
                  </div>
                  <div className="like_items">
                    <span
                      class="iconify playvideoIcons"
                      data-icon="mdi:share"
                      data-inline="false"
                    ></span>
                    <span className="numbers">SHARE</span>
                  </div>
                  <div onClick={() => setShow(true)} className="like_items">
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

        <div className="right_div">
          {metalBlues.map((item) => {
            const { id, thumbnail, name, views, artist } = item;
            return (
              <>
                <div key={id}>
                  <div className="video_div_right">
                    <div className="thubmnail_div_right">
                      <Link to={{ pathname: `/video/${id}` }}>
                        <img
                          className="thumbnail_img_right"
                          src={thumbnail}
                          alt="thumbnail"
                        />
                      </Link>
                    </div>
                    <div className="video_contents_right">
                      <h3 style={{ color: darkMode ? "white" : "black" }}>
                        {name}
                      </h3>
                      <span style={{ color: darkMode ? "#aaaaaa" : "#606060" }}>
                        {" "}
                        {artist} ♪
                      </span>
                      <div>
                        <span>
                          <span
                            style={{ color: darkMode ? "#aaaaaa" : "#606060" }}
                          >
                            {views}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
