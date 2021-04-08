import "./Genre.css";
import "../LeftNavBar/LeftBar.css";
import { LeftBar } from "../LeftNavBar/LeftBar";
import { Link } from "react-router-dom";
export const Genre = () => {
  return (
    <div className="genre_main">
      <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div>
      <div className="genre">
        <Link to="/metal">
          <button className="genre_btn">METAL</button>
        </Link>
        <Link to="/blues">
          <button className="genre_btn">BLUES</button>
        </Link>
        <Link to="/sad">
          <button className="genre_btn">SAD</button>
        </Link>
        <Link to="/rock">
          <button className="genre_btn">ROCK</button>
        </Link>
      </div>
    </div>
  );
};
