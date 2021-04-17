import { DisplayScreen } from "../DisplayGenreVideoScreen/DisplayScreen";
import { LeftBar } from "../LeftNavBar/LeftBar";
import { useVideo } from "../Context/VideoProvider";

export const Blues = () => {
  const { state } = useVideo();
  console.log("I am datas", state.videodata);
  const filteredBlues = state.videodata.filter(
    (item) => item.genre === "blues"
  );
  console.log("I am filtered datas", filteredBlues);

  return (
    <>
      <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div>
      {filteredBlues.map((item) => (
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
