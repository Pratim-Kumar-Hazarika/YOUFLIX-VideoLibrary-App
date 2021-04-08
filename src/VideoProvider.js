import { createContext, useContext, useReducer } from "react";
import { videodata } from "./dataofvideo.js";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  function reducer(state, action) {
    switch (state.type) {
      case "LIKED_VIDEO":
        return (state = {
          ...state,
          onClickLikeVideos: [...state.onClickLikeVideos, action.payload]
        });
      default:
        return { state };
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    videodata,
    onClickLikeVideos: []
  });
  return (
    <>
      <VideoContext.Provider value={{ state, dispatch }}>
        {children}
      </VideoContext.Provider>
    </>
  );
};
export function useVideo() {
  return useContext(VideoContext);
}
