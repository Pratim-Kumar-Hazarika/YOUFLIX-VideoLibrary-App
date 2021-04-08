import { useVideo } from "./VideoProvider";

export function LikedVideo() {
  const {
    state: { onClickLikeVideos }
  } = useVideo();
  console.log("i am state", { onClickLikeVideos });
  return (
    <>
      <h1>I am likes vide</h1>
    </>
  );
}
