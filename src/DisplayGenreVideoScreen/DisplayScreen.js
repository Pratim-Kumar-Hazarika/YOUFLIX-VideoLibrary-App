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
    <div className="ds_mainDiv">
      <div className="ds_video_content" >
        <div className="ds_img_div">
          <Link to={{ pathname: `/video/${id}` }}>
            <img alt="artist"  src={thumbnail} className="ds_img" />
          </Link>
        </div>
        <div className="ds_titles_views_avatar" >
        <div className="ds_avatar">
        <img src={image}  alt="Avatar" className="avatar ds_avatar_img"/>
            <span className="ds_artistname">{artist} ♪</span>
          </div>
          <div className="ds_title_views">
            <div className="ds_name_div">
              <span className="ds_name">{name}</span>
            </div>
            <div className="ds_views_div">
              <span className="ds_views">{views}</span>
            </div>
            <div className="ds_artist_div">
              <span className="ds_artist">{artist} ♪</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
