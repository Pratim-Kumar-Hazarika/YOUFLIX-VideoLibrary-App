import "./DisplayScreem.css";
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
  return (
    <div>
      <div className="mainvideodiv">
        <Link to={`/video/${id}`}>Play Video</Link>
        <div>
          <div className="video_div" style={{ cursor: "pointer" }}>
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
