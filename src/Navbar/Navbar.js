import "./Nav.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <div className="navbar-div">
        <div className="header">
          <div>
            <h1>YouFlix</h1>
          </div>
          <div>
            <span
              class="iconify"
              data-icon="mdi:video-box"
              data-inline="false"
            ></span>
          </div>
        </div>
        <div className="searchbar">
          <div>
            <input className="inputbar" />
          </div>
          <div>
            <button className="search_btn">
              <span
                class="iconify iconify2"
                data-icon="carbon:search"
                data-inline="false"
              ></span>
            </button>
          </div>
        </div>
        <div className="buttons">
          <Link to="/">
            <button className="nav-btn1">HOME</button>
          </Link>
          <Link to="/genre">
            <button className="nav-btn1">GENRE</button>
          </Link>
          <Link to="/likedvideo">
            <button className="nav-btn1">LIKED VIDEO</button>
          </Link>
        </div>
        <div>
          <img
            style={{
              borderRadius: "50%",
              width: "3rem",
              marginLeft: "5rem",
              marginTop: "1rem"
            }}
            src="https://pbs.twimg.com/profile_images/1361579179959939072/ArgCDKFe_400x400.jpg"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}
