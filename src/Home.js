import { LeftBar } from "./LeftBar";
import { Row } from "./Row";
export const Home = () => {
  return (
    <div>
      {/* <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div> */}
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
