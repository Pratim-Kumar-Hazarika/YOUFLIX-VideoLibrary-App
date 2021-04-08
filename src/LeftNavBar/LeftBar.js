import "./LeftBar.css";
export function LeftBar() {
  return (
    <div className="left_div">
      <div>
        <span
          class="iconify leftbar_icons"
          data-icon="mdi:home"
          data-inline="false"
        ></span>
        <span className="left_bar_text">HOME</span>
      </div>
      <div>
        <span
          class="iconify leftbar_icons"
          data-icon="zondicons:explore"
          data-inline="false"
        ></span>
        <span className="left_bar_text">EXPLORE</span>
      </div>
      <div>
        <span
          class="iconify leftbar_icons"
          data-icon="bx:bxs-like"
          data-inline="false"
        ></span>
        <span className="left_bar_text">LIKED </span>
      </div>
      <div>
        <span
          class="iconify leftbar_icons"
          data-icon="zmdi:playlist-plus"
          data-inline="false"
        ></span>
        <span className="left_bar_text">PLAYLIST</span>
      </div>
      <div>
        <span
          class="iconify leftbar_icons"
          data-icon="ri:history-fill"
          data-inline="false"
        ></span>
        <span className="left_bar_text">HISTORY</span>
      </div>
    </div>
  );
}
