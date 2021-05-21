import { Link } from "react-router-dom";
import "../LikedVideos/LikedVideo.css";
import { LeftBar } from "../LeftNavBar/LeftBar";
import { useVideo } from "../Context/VideoProvider";
import { Toast } from "../Toast/Toast";
import axios from "axios";
export function HistoryVideo() {
  const {
    state: { historyVideos },
    dispatch,
    toastMessage 
  } = useVideo();
  const { darkMode } = useVideo();
  const userId = JSON.parse(localStorage.getItem("user"));
  async function deleteVideoClickHandler(item){
    try {
      dispatch({ type: "DELETE_VIDEO_FROM_HISTORY", payload: item });
      const res = await axios.delete(
        `https://YouFlixBackend.prratim.repl.co/users/${userId[0]._id}/historyVideos`,
        { data: { _id: item._id } }
      );
    } catch (error) {
      console.log("Error occured while deleting from historyVideos")
    }
  }
  
  return (
    <div className="like_content_div">
      <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div>
      <div className="likesssss">
        <div style={{ display: "flex" }}>
          <h1 style={{ fontWeight: "700" }}>Watch History</h1>
          <div className="symbol">
            <span
              class="iconify leftbar_icons"
              data-icon="ri:history-fill"
              data-inline="false"
            ></span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            onClick={() => dispatch({ type: "DELETE_HISTORY" })}
            style={{ cursor: "pointer" }}
          >
            <span
              class="iconify dustbinIcon"
              data-icon="mdi:delete"
              data-inline="false"
            ></span>
          </div>
          <div>
            <span>CLEAR HISTORY   {toastMessage && <Toast/>} </span>
          </div>
        </div>
        <div className="likedVideoDiv">
          {historyVideos.map((item) => {
            const { _id, thumbnail, name, artist } = item;
            return (
              <>
                <div>
                  <div className="video_div_liked">
                    <div className="thubmnail_div_liked">
                      <Link to={{ pathname: `/video/${_id}` }}>
                        <img
                          className="thumbnail_img_liked"
                          src={thumbnail}
                          alt="thumbnail"
                        />
                      </Link>
                    </div>
                    <div className="video_contents_liked">
                      <h3 style={{ color: darkMode ? "white" : "black" }}>
                        {name}
                      </h3>
                      <span style={{ color: darkMode ? "white" : "black" }}>
                        {artist} ♪
                      </span>
                      <div
                      onClick={()=>deleteVideoClickHandler(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <span
                        class="iconify dustbinIcon"
                        data-icon="mdi:delete"
                        data-inline="false"
                      ></span>
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
