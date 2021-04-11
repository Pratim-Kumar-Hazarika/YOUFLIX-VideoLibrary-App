import "./Genre.css";
import "../LeftNavBar/LeftBar.css";
import { LeftBar } from "../LeftNavBar/LeftBar";
import { Link } from "react-router-dom";
export const Genre = () => {
  return (
    <>
      <div className="genre_main">
        <div style={{ padding: "1rem", marginTop: "3rem" }}>
          <LeftBar />
        </div>
        {/* <div className="genre">
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
        </div> */}
        <div className="img">
          <div className="img_div">
            <Link to="/blues">
              <img
                className="john"
                src="https://blog.truefire.com/wp-content/uploads/2015/10/john-mayer-guitar-lessons.jpg"
                alt="john mayer"
              />
            </Link>
          </div>
          <div className="img_div">
            <Link to="/metal">
              <img
                className="john"
                src="https://cdn.wallpapersafari.com/28/19/61w7fo.jpg"
                alt="john mayer"
              />
            </Link>
          </div>
        </div>
        <div className="img">
          <div className="img_div">
            <Link to="/rock">
              <img
                className="john"
                src="https://i.pinimg.com/originals/8b/df/4c/8bdf4c12d664b92dfdcb6482bb579fa9.jpg"
                alt="john mayer"
              />
            </Link>
          </div>
          <div className="img_div">
            <Link to="/sad">
              <img
                className="john"
                src="https://m.media-amazon.com/images/I/91NrWSDqMmL._SS500_.jpg"
                alt="john mayer"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
