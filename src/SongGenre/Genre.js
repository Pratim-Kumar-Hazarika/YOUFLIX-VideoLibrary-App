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
        <div className="img_div_genre">

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
                src="https://i.pinimg.com/originals/20/c4/35/20c435b971b2dba5244d1454c7eabbf6.jpg"
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


        <div className="img">
          <div className="img_div">
            <Link to="/rock">
              <img
                className="john"
                src="https://cdn.spindizzyrecords.com/uploads/2020/10/juice-wrld-legends-never-die-header-2020.jpg"
                alt="john mayer"
              />
            </Link>
          </div>
          <div className="img_div">
            <Link to="/sad">
              <img
                className="john"
                src="https://static.posters.cz/image/750/aufkleber/linkin-park-minutes-i7627.jpg"
                alt="john mayer"
              />
            </Link>
          </div>
        </div>

      </div>
    </div>
       
    </>
  );
};
