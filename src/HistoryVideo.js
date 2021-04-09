import { Link } from "react-router-dom";
import "./LikedVideos/LikedVideo.css";
import { LeftBar } from "./LeftNavBar/LeftBar";
import { useVideo } from "./VideoProvider";
export function HistoryVideo() {
  const {
    state: { historyVideos },
    dispatch
  } = useVideo();
  console.log("i am state", { historyVideos });
  return (
    <div>
      <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div>
      <div style={{ marginLeft: "13rem", width: "80%" }}>
        <h1 style={{ color: "white", fontWeight: "400" }}>Watch History</h1>
        <div className="likedVideoDiv">
          {historyVideos.map((item) => {
            const { id, thumbnail, name, views, artist } = item;
            return (
              <>
                <div key={id}>
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
                      <h3 style={{ color: "white" }}>{name}</h3>
                      <span> {artist} ♪</span>
                      <div
                        onClick={() =>
                          dispatch({ type: "DELETE_VIDEO", payload: item })
                        }
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
