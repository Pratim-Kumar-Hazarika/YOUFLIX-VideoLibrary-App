import { LeftBar } from "./LeftNavBar/LeftBar";
import { Row } from "./Row/Row";
import "./LeftNavBar/LeftBar.css";
export const Home = () => {
  return (
    <div>
      <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div>
      <div
        style={{
          overflow: "hidden",
          marginLeft: "12rem",
          marginTop: "-1rem",
          zIndex: 1
        }}
      >
        <Row />
      </div>
    </div>
  );
};
