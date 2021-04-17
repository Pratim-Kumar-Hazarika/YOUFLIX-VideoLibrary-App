import { useVideo } from "../Context/VideoProvider";
import { DisplayScreen } from "../DisplayGenreVideoScreen/DisplayScreen";
import { LeftBar } from "../LeftNavBar/LeftBar";

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
