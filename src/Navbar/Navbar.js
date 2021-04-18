import "./Nav.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import { useVideo } from "../Context/VideoProvider";

export function RiMoonClearFill(props) {
  return (
    <svg
      class="iconify nav_icons"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22C6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762zm8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function PhSun(props) {
  return (
    <svg
      class="iconify nav_icons"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M128 60a68 68 0 1 0 68 68a68.077 68.077 0 0 0-68-68zm0 120a52 52 0 1 1 52-52a52.059 52.059 0 0 1-52 52zm-8-144V16a8 8 0 0 1 16 0v20a8 8 0 0 1-16 0zM43.147 54.46a8 8 0 1 1 11.314-11.313L68.603 57.29A8 8 0 1 1 57.29 68.603zM36 136H16a8 8 0 0 1 0-16h20a8 8 0 0 1 0 16zm32.603 51.396a8 8 0 0 1 0 11.314l-14.142 14.143a8 8 0 1 1-11.314-11.314l14.143-14.142a8 8 0 0 1 11.313 0zM136 220v20a8 8 0 0 1-16 0v-20a8 8 0 0 1 16 0zm76.853-18.46a8 8 0 1 1-11.314 11.313l-14.142-14.143a8 8 0 1 1 11.313-11.313zM248 128a8 8 0 0 1-8 8h-20a8 8 0 0 1 0-16h20a8 8 0 0 1 8 8zm-60.603-59.396a8 8 0 0 1 0-11.314l14.142-14.143a8 8 0 1 1 11.314 11.314L198.71 68.603a8 8 0 0 1-11.313 0z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
export function Navbar() {
  const { logOutHandler, login } = useAuth();
  const { setDarkMode, darkMode } = useVideo();
  return (
    <div>
      <div
        className="navbar-div"
        style={{
          backgroundColor: darkMode ? "black" : "white",
          borderBottom: !darkMode && "3px solid whitesmoke"
        }}
      >
        <div className="header">
          <div>
            <h1 style={{ color: darkMode ? "white" : "black" }}>YouFlix</h1>
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
        <div
          className="color_modes"
          style={{ cursor: "pointer" }}
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? <RiMoonClearFill /> : <PhSun />}
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
