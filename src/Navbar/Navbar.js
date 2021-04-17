import "./Nav.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

export function Navbar() {
  const { logOutHandler, login } = useAuth();
  return (
    <div>
      <div className="navbar-div">
        <div className="header">
          <div>
            <h1>YouFlix</h1>
          </div>
          <div>
            <Link to="/">
              <span
                class="iconify"
                data-icon="mdi:video-box"
                data-inline="false"
              ></span>
            </Link>
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
          <div>
            <Link to="/">
              <span
                class="iconify nav_icons"
                data-icon="mdi:home"
                data-inline="false"
              ></span>
            </Link>
          </div>

          <div>
            <Link to="/genre">
              <span
                class="iconify nav_icons"
                data-icon="zondicons:explore"
                data-inline="false"
              ></span>
            </Link>
          </div>

          <div>
            <Link to="/likedvideo">
              <span
                class="iconify nav_icons"
                data-icon="bx:bxs-like"
                data-inline="false"
              ></span>
            </Link>
          </div>

          <div>
            <Link to="/historyvideo">
              <span
                class="iconify nav_icons"
                data-icon="ri:history-fill"
                data-inline="false"
              ></span>
            </Link>
          </div>

          <div>
            <Link to="/login">
              <button className="nav-btn1" onClick={logOutHandler}>
                {login ? "SIGN OUT" : "SIGN IN"}
              </button>
            </Link>
          </div>
        </div>
        {login && (
          <div>
            <img
              className="nav_avatar"
              src="https://pbs.twimg.com/profile_images/1361579179959939072/ArgCDKFe_400x400.jpg"
              alt="avatar"
            />
          </div>
        )}
      </div>
    </div>
  );
}
