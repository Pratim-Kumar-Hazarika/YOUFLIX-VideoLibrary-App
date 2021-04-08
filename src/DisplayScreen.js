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
        <div>
          <div className="video_div" style={{ border: "1px solid white" }}>
            <div className="thubmnail_div">
              <Link to={`/video/${id}`}>
                {" "}
                <img
                  className="thumbnail_img"
                  src={thumbnail}
                  alt="thumbnail"
                />
              </Link>
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
