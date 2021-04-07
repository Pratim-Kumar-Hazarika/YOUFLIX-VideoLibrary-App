import { DisplayScreen } from "../DisplayScreen";
import { useVideo } from "../VideoProvider";

export const Blues = () => {
  const { state } = useVideo();
  console.log("I am datas", state.videodata);
  const filteredBlues = state.videodata.filter(
    (item) => item.genre === "blues"
  );
  console.log("I am filtered datas", filteredBlues);

  return (
    <>
      {filteredBlues.map((item) => (
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
