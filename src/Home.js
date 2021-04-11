import { LeftBar } from "./LeftNavBar/LeftBar";
import { Row } from "./Row/Row";
import "./LeftNavBar/LeftBar.css";
export const Home = () => {
  return (
    <div>
      <div style={{ padding: "1rem", marginTop: "3rem" }}>
        <LeftBar />
      </div>
      <div className="row_div">
        <Row />
      </div>
    </div>
  );
};
