import "./Nav.css";

export function Navbar({ setRoute }) {
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
          <button className="nav-btn1" onClick={() => setRoute("home")}>
            Home
          </button>
          <button className="nav-btn2" onClick={() => setRoute("genre")}>
            Genre
          </button>
          <button className="nav-btn3" onClick={() => setRoute("likedVideos")}>
            Liked Videos
          </button>
          <button className="nav-btn4" onClick={() => setRoute("genre")}>
            History
          </button>
        </div>
      </div>
    </div>
  );
}
