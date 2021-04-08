import "./Row.css";
import { useVideo } from "../VideoProvider";
import { Link } from "react-router-dom";
export function Row() {
  const { state } = useVideo();
  const metalBlues = state.videodata.filter(
    (item) => item.genre === "blues" || item.genre === "metal"
  );
  const sobsRock = state.videodata.filter(
    (item) => item.genre === "sobs" || item.genre === "rock"
  );
  return (
    <div className="rows">
      <div>
        <h2 style={{ color: "white" }}>BLUES AND METAL</h2>
        <div className="row-1">
          <div style={{ display: "flex" }}>
            {metalBlues.map((item) => {
              return (
                <div className="iframe_row">
                  <div style={{ height: "100%" }}>
                    <Link to={`/video/${item.id}`}>
                      <img
                        className="video_image"
                        src={item.thumbnail}
                        alt="video_image"
                      />
                    </Link>
                    <div style={{ display: "flex", position: "relative" }}>
                      <div>
                        <img className="avatar" src={item.image} alt="avatar" />
                      </div>
                      <div
                        style={{
                          positon: "absolute",
                          right: "0",
                          marginLeft: "20px",
                          bottom: "0",
                          marginTop: "13px"
                        }}
                      >
                        <span style={{ fontWeight: "400", marginTop: "10px" }}>
                          {item.name}
                        </span>
                        <p>{item.views}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <h2 style={{ color: "white" }}>SAD AND ROCK</h2>
        <div className="row-1">
          <div style={{ display: "flex" }}>
            {sobsRock.map((item) => {
              return (
                <div className="iframe_row">
                  <div style={{ height: "100%" }}>
                    <Link to={`/video/${item.id}`}>
                      <img
                        className="video_image"
                        src={item.thumbnail}
                        alt="video_image"
                      />
                    </Link>
                    <div style={{ display: "flex", position: "relative" }}>
                      <div>
                        <img className="avatar" src={item.image} alt="avatar" />
                      </div>
                      <div
                        style={{
                          positon: "absolute",
                          right: "0",
                          marginLeft: "20px",
                          bottom: "0",
                          marginTop: "15px"
                        }}
                      >
                        <span style={{ fontWeight: "400", marginTop: "10px" }}>
                          {item.name}
                        </span>
                        <p>{item.views}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
