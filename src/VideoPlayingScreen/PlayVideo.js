import "./PlayVideo.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
<<<<<<< Codesandbox
import { useVideo } from "../Context/VideoProvider";
=======

>>>>>>> GitHub
import { Link } from "react-router-dom";
import { useEffect } from "react";
<<<<<<< Codesandbox
export function PlayVideo() {
=======
import { useVideo } from "../Context/VideoProvider";
>>>>>>> GitHub
export function PlayVideo() {
  const { videoId } = useParams();
  const {
    state,
    dispatch,
    list,
    setList,
    inputText,
    setInput,
    show,
    setShow
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
      console.log("i m dispatched", { itemFound });
    }
  }

  function onChangeClickHandler(e) {
    setInput(e.target.value);
  }
  function addClickHandLer(e) {
    e.preventDefault();
    if (inputText !== "") {
      setList([...list, inputText]);
      setInput("");
    }
  }
  return (
    <div>
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
          <input type="checkbox" />
          <label>Watch Later</label>
        </div>
        {list.map((item) => {
          return (
            <div className="input1">
              <input type="checkbox" />
              <label> {item}</label>
            </div>
          );
        })}

        <div className="modeladd">
          <form>
            <input
              className="add_playlist"
              type="input"
              name="name"
              placeholder="New Playlist..."
              value={inputText}
              onChange={onChangeClickHandler}
            />
          </form>
          <button className="add_playlist_btn" onClick={addClickHandLer}>
            CREATE
          </button>
        </div>
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
                    {/* <button onClick={buttonCLick}>Click me</button> */}
                    <div onClick={buttonCLick} className="likeButton">
                      <span
                        class="iconify playvideoIcons"
                        data-icon="mdi:thumb-up"
                        data-inline="false"
                      ></span>
                      <span
                        className="numbers_liked"
                        style={{ marginTop: "-0.3rem" }}
                      >
                        289K
                      </span>
                    </div>
                  </div>
                  <div className="like_items">
                    <span
                      class="iconify playvideoIcons"
                      data-icon="mdi:thumb-down"
                      data-inline="false"
                    ></span>
                    <span className="numbers">29K</span>
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
                      <h3 style={{ color: "white" }}>{name}</h3>
                      <span> {artist} ♪</span>
                      <div>
                        <span>
                          <span>{views}</span>
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
