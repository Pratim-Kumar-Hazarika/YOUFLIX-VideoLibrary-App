
import "./Playlist.css"
import { useVideo } from "./Context/VideoProvider";
import { Link } from "react-router-dom";
import { LeftBar } from "./LeftNavBar/LeftBar";

export function PlayList() {
  const { state :{customplaylists}} = useVideo();
  console.log("I AM CUSTOM PPLAYLISTSSSS",customplaylists)
  return (
    <div style={{height:"100vh"}}>
    <div style={{ padding: "1rem", marginTop: "3rem" }}>
    <LeftBar/>
  </div>
    <div className="row_div">
    <div className="rows">
      <div style={{ display: "flex" }}>
          <h1 style={{ fontWeight: "700" }}>Playlists</h1>
          <div className="symbol">
          <span
            class="iconify leftbar_icons"
            data-icon="zmdi:playlist-plus"
            data-inline="false"
          ></span>
          </div>
        </div>
      <div>
        <h2>Watch Later</h2>
        {/* <span>{customplaylists[0].videos.length ===0 && "No videos added"}</span> */}
        <div className="playlist">
          <div style={{ display: "flex" }}>
            {customplaylists[0].videos.map((item) => {
              return (
                <div className="iframe_row">
                  <div style={{ height: "100%" }}>
                    <Link to={`/video/${item.id}`}>
                      <img
                        className="video_image playlist_img"
                        src={item.thumbnail}
                        alt="video_image"
                      />
                    </Link>
                    <div
                      className="titles"
                      style={{ display: "flex", position: "relative" ,fontSize:"12px"}}
                    >
                      <div>
                        <img  className="avatar playlist_avatar" src={item.image} alt="avatar" />
                      </div>
                      <div
                        className="titleviews"
                        style={{
                          positon: "absolute",
                          right: "0",
                          marginLeft: "20px",
                          bottom: "0",
                          marginTop: "13px"
                        }}
                      >
                        <span style={{ fontWeight: "400", marginTop: "10px" }}>
                          {item.name}
                        </span>
                        <p>{item.views}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </div>
    </div>
    </div>
   

    </div>
  );
}
