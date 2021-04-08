import "./PlayVideo.css";
import { useParams } from "react-router-dom";
import { useVideo } from "../VideoProvider";
import { LeftBar } from "../LeftNavBar/LeftBar";
import { Link } from "react-router-dom";
export function PlayVideo({ url, name, views, artist, image }) {
  const { videoId } = useParams();
  const { state } = useVideo();
  const item = state.videodata.find((item) => item.id === Number(videoId));
  const metalBlues = state.videodata.filter(
    (item) =>
      item.genre === "sobs" || item.genre === "metal" || item.genre === "rock"
  );
  return (
    <div>
      <div className="2div" style={{ display: "flex", marginTop: "7rem" }}>
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

        <div className="right_div">
          {metalBlues.map((item) => {
            const { id, thumbnail, name, views, artist } = item;
            return (
              <>
                <div>
                  <div className="video_div_right">
                    <div className="thubmnail_div_right">
                      <Link to={`/video/${id}`}>
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
