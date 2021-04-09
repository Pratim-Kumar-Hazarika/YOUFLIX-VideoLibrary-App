import { createContext, useContext, useReducer } from "react";
import { videodata } from "./dataofvideo.js";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    videodata,
    onClickLikeVideos: [],
    historyVideos: []
  });

  function reducer(state, action) {
    switch (action.type) {
      case "LIKED_VIDEO":
        // return (state = {
        //   ...state,
        //   onClickLikeVideos: [...state.onClickLikeVideos, action.payload]
        // });
        return {
          ...state,
          onClickLikeVideos: [...state.onClickLikeVideos, action.payload]
        };
      case "DELETE_VIDEO":
        return {
          ...state,
          onClickLikeVideos: state.onClickLikeVideos.filter(
            (item) => item !== action.payload
          )
        };
      case "HISTORY_VIDEO":
        if (state.historyVideos.length >= 0) {
          const itemInArray = state.historyVideos.find(
            (item) => item === action.payload
          );
          if (itemInArray) {
            return {
              ...state,
              historyVideos: state.historyVideos.map((item) =>
                item === action.payload ? item : item
              )
            };
          } else {
            return {
              ...state,
              historyVideos: [...state.historyVideos, action.payload]
            };
          }
        }
        break;
      case "DELETE_HISTORY":
        return {
          ...state,
          historyVideos: []
        };
      default:
        return state;
    }
  }

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
