import { createContext, useContext, useReducer, useState } from "react";
import { reducer,videoObj } from "../Reducers/videoReducer"
export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,videoObj);

  const [show, setShow] = useState(false);
  const [inputText, setInput] = useState("");
  const [ setList] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <VideoContext.Provider
        value={{
          state,
          dispatch,
          setList,
          inputText,
          setInput,
          show,
          setShow,
          darkMode,
          setDarkMode,
        }}
      >
        {children}
      </VideoContext.Provider>
    </>
  );
};
export function useVideo() {
  return useContext(VideoContext);
}
