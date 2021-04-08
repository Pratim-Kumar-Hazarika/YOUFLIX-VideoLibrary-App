import { useState } from "react";
import "./DisplayScreem.css";
import { PlayVideo } from "./PlayVideo";
import { useVideo } from "./VideoProvider";
import { Link } from "react-router-dom";
export const DisplayScreen = ({
  url,
  name,
  artist,
  views,
  image,
  thumbnail,
  id
}) => {
  const { dispatch } = useVideo();
  const [route, setRoute] = useState("");
  return (
    <div>
      {route === "playvideo" && (
        <PlayVideo
          url={url}
          name={name}
          views={views}
          artist={artist}
          image={image}
        />
      )}
      <div className="mainvideodiv">
        <Link to={`/video/${id}`}>Play Video</Link>
        <div>
          <div
            onClick={() => setRoute("playvideo")}
            className="video_div"
            style={{ cursor: "pointer" }}
          >
            <div className="thubmnail_div">
              <img className="thumbnail_img" src={thumbnail} alt="thumbnail" />
            </div>
            <div className="video_contents">
              <h3>{name}</h3>
              <span>{views}</span>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <img className="image_avatar" src={image} alt="avatar" />
                <span style={{ marginTop: "20px", marginLeft: "10px" }}>
                  {artist} ♪
                </span>
              </div>
              <p style={{ marginTop: "3rem" }}>
                Tommee Profitt - In The End (Mellen Gi Remix) [Fleurie Cover]
                Follow TrapMusicHD Facebook: ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//  {/* <iframe
//             title="video"
//             className="display_video_iframe"
//             width="420"
//             height="315"
//             src={url}
//           ></iframe> */}
