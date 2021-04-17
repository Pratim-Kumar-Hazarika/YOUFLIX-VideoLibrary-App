import { useVideo } from "../Context/VideoProvider";
import { DisplayScreen } from "../DisplayGenreVideoScreen/DisplayScreen";
import { LeftBar } from "../LeftNavBar/LeftBar";

export const Metal = () => {
  const { state } = useVideo();
  const filteredMetal = state.videodata.filter(
    (item) => item.genre === "metal"
  );
  console.log("Metal datas", filteredMetal);

  return (
    <>
      <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div>
      {filteredMetal.map((item) => (
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
