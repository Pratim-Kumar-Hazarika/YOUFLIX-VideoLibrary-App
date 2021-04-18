import { Link } from "react-router-dom";
import "../LikedVideos/LikedVideo.css";
import { LeftBar } from "../LeftNavBar/LeftBar";
import { useVideo } from "../Context/VideoProvider";
export function HistoryVideo() {
  const {
    state: { historyVideos },
    dispatch
  } = useVideo();
  console.log("i am state", { historyVideos });
  const { darkMode } = useVideo();
  return (
    <div className="like_content_div">
      <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div>
      <div className="likesssss">
        <div style={{ display: "flex" }}>
          <h1 style={{ fontWeight: "700" }}>Watch History</h1>
          <div style={{ marginTop: "1.1rem", marginLeft: "1rem" }}>
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
            <span>CLEAR HISTORY</span>
          </div>
        </div>
        <div className="likedVideoDiv">
          {historyVideos.map((item) => {
            const { id, thumbnail, name, views, artist } = item;
            return (
              <>
                <div>
                  <div className="video_div_liked">
                    <div className="thubmnail_div_liked">
                      <Link to={{ pathname: `/video/${id}` }}>
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
                      <span> {artist} ♪</span>
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
