import { DisplayScreen } from "../DisplayGenreVideoScreen/DisplayScreen";
import { LeftBar } from "../LeftNavBar/LeftBar";
import { useVideo } from "../VideoProvider";

export const Sobs = () => {
  const { state } = useVideo();
  const filteredSobs = state.videodata.filter((item) => item.genre === "sobs");
  console.log("Sobsdatas", filteredSobs);

  return (
    <>
      <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div>
      {filteredSobs.map((item) => (
        <DisplayScreen
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
