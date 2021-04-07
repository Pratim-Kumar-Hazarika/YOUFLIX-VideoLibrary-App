import { useVideo } from "./VideoProvider";

export function LikedVideo() {
  const { state } = useVideo();
  console.log(state);
  return (
    <>
      <h1>I am likes vide</h1>
    </>
  );
}
