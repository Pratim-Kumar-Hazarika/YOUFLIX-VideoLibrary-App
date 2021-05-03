import { useVideo } from "./Context/VideoProvider";
import { LeftBar } from "./LeftNavBar/LeftBar";

export function PlayList() {
  const {state} = useVideo();
  console.log("I am from the playlist part....", state.customplaylists);
  return (
    <>
      <div style={{ padding: "1rem", marginTop: "3rem" }}>
        <LeftBar />
      </div>

      <div style={{ marginTop: "15rem", marginLeft: "10rem",height:"100vh" }}>
        <h1>I am playlist</h1>
      </div>
    </>
  );
}
