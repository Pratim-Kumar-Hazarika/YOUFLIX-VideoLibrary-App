import { DisplayScreen } from "../DisplayScreen";
import { useVideo } from "../VideoProvider";

export const Rock = () => {
  const { state, dispatch } = useVideo();
  const filteredRock = state.videodata.filter((item) => item.genre === "rock");

  return (
    <>
      {filteredRock.map((item) => (
        <DisplayScreen
          url={item.url}
          name={item.name}
          artist={item.artist}
          views={item.views}
          image={item.image}
          thumbnail={item.thumbnail}
          item={item}
        />
      ))}
    </>
  );
};
