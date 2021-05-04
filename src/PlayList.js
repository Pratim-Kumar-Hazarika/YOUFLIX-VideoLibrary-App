
import "./Playlist.css"
import { useVideo } from "./Context/VideoProvider";
import { Link } from "react-router-dom";
import { LeftBar } from "./LeftNavBar/LeftBar";

export function PlayList() {
  const { state :{customplaylists}} = useVideo();
  console.log("I AM CUSTOM PPLAYLISTSSSS",customplaylists)
  return (
    <div style={{height:"100%"}}>
    <div style={{ padding: "1rem", marginTop: "3rem" }}>
    <LeftBar/>
  </div>
    <div className="row_div">
    <div className="rows">
      <div style={{ display: "flex" }}>
          <h1 style={{ fontWeight: "700" }}>Your Playlists</h1>
          <div className="symbol">
          <span
            class="iconify leftbar_icons"
            data-icon="zmdi:playlist-plus"
            data-inline="false"
          ></span>
          </div>
        </div>
      <div>
        <span>{customplaylists[0].videos.length ===0 && "No videos added"}</span>
        <div className="playlist" >
            {
              customplaylists.map((currentPlaylist)=>{
                return <><h2>{currentPlaylist.name}</h2>
                <div style={{display:"flex"}}>
                {  currentPlaylist.videos.map(({itemFound})=>{
                 return(
                  <div className="iframe_row_playlist">
                  <div style={{ height: "100%" }}>
                    <Link to={`/video/${itemFound.id}`}>
                      <img
                        className="video_image playlist_img"
                        src={itemFound.thumbnail}
                        alt="video_image"
                      />
                    </Link>
                    <div
                      className="titles"
                      style={{ display: "flex", position: "relative" ,fontSize:"12px"}}
                    >
                      <div>
                        <img  className="avatar playlist_avatar" src={itemFound.image} alt="avatar" />
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
                          {itemFound.name}
                        </span>
                        <p>{itemFound.views}</p>
                      </div>
                    </div>
                  </div>
                </div>
                 )
               })}
                </div>
                </>
              })
            } 
        </div>
    </div>
    </div>
    </div>
    </div>
  );
}
