import { DisplayScreen } from "../DisplayScreen";
import { useVideo } from "../VideoProvider";

export const Metal = () => {
  const { state } = useVideo();
  const filteredMetal = state.videodata.filter(
    (item) => item.genre === "metal"
  );
  console.log("Metal datas", filteredMetal);

  return (
    <>
      {filteredMetal.map((item) => (
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
