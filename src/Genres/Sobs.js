import { DisplayScreen } from "../DisplayScreen";
import { useVideo } from "../VideoProvider";

export const Sobs = () => {
  const { state } = useVideo();
  const filteredSobs = state.videodata.filter((item) => item.genre === "sobs");
  console.log("Sobsdatas", filteredSobs);

  return (
    <>
      {filteredSobs.map((item) => (
        <DisplayScreen
          url={item.url}
          name={item.name}
          artist={item.artist}
          views={item.views}
          image={item.image}
          thumbnail={item.thumbnail}
        />
      ))}
    </>
  );
};
