import "./PlayVideo.css";
import { useParams } from "react-router-dom";
import { useVideo } from "./VideoProvider";
import "./LeftBar.css";
import { LeftBar } from "./LeftBar";

export function PlayVideo({ url, name, views, artist, image }) {
  const { videoId } = useParams();
  const { state } = useVideo();
  const item = state.videodata.find((item) => item.id === Number(videoId));
  return (
    <>
      <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div>
      <div className="video">
        <iframe
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: "0" }}
          src={`${item.url}?autoplay=1&mute=1"`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="videoDiv">
          <div className="video_contents_">
            <h3>{item.name}</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div>
                <span>{item.views}</span>
              </div>
              <div className="likes_controls">
                <div className="like_items">
                  <span
                    class="iconify playvideoIcons"
                    data-icon="mdi:thumb-up"
                    data-inline="false"
                  ></span>
                  <span className="numbers">289K</span>
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
                <div className="like_items">
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
                borderTop: "1px solid rgba(225,225,225,0.1)"
              }}
            >
              <img className="image_avatar" src={item.image} alt="avatar" />
              <span style={{ marginTop: "20px", marginLeft: "10px" }}>
                {item.artist} ♪
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
