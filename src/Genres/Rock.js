import { useVideo } from "../Context/VideoProvider";
import { DisplayScreen } from "../DisplayGenreVideoScreen/DisplayScreen";
import { LeftBar } from "../LeftNavBar/LeftBar";
export const Rock = () => {
  const { state} = useVideo();
  const filteredRock = state.data.filter((item) => item.genre === "rock");
  return (
    <>
      <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div>
      {filteredRock.map((item) => (
        <DisplayScreen
          key={item.id}
          url={item.url}
          name={item.name}
          artist={item.artist}
          views={item.views}
          image={item.image}
          thumbnail={item.thumbnail}
          id={item._id}
        />
      ))}
    </>
  );
};
