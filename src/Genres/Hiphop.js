
import { DisplayScreen } from "../DisplayGenreVideoScreen/DisplayScreen";
import { LeftBar } from "../LeftNavBar/LeftBar";
import { useVideo } from "../Context/VideoProvider";

export const Hiphop = () => {
  const { state } = useVideo();
  console.log("I am datas", state.videodata);
  const filteredhiphop = state.videodata.filter(
    (item) => item.genre === "hiphop"
  );
  return (
    <>
      <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div>
      {filteredhiphop.map((item) => (
        <DisplayScreen
          key={item.id}
          url={item.url}
          name={item.name}
          artist={item.artist}
          views={item.views}
          image={item.image}
          thumbnail={item.thumbnail}
          id={item.id}
        />
      ))}
    </>
  );
};
