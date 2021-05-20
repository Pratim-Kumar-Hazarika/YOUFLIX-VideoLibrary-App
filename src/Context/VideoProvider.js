import { createContext, useContext, useReducer, useState } from "react";
import { videodata } from "../dataofvideo.js";

export const VideoContext = createContext();
const videoObj = {
  videodata,
  onClickLikeVideos: [],
  historyVideos: [],
  toastMessage: false,
  customplaylists :[
    {
      name :"Watch Later",
      videos:[]
    }
  ],
  list:[],
  checkId:false,
  data:[],
}
export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,videoObj);
  const { toastMessage } = state;

  function reducer(state, action) {
    switch (action.type) {
      case "DATA_FROM_SERVER":
        return{
          ...state,
          data:action.payload
        };
      case "LIKED_VIDEOS_FROM_SERVER":
        return{
          ...state,
          onClickLikeVideos:action.payload
        };
      case "HISTORY_VIDEOS_FROM_SERVER":
        return{
          ...state,
          historyVideos:action.payload
        }
      case "SHOW_TOAST":
        return { ...state, toastMessage };
      case "LIKED_VIDEO":
        if (state.onClickLikeVideos.length >= 0) {
          const itemInArray = state.onClickLikeVideos.find(
            (item) => item === action.payload
          );
          if (itemInArray) {
            return {
              ...state,
              onClickLikeVideos: state.onClickLikeVideos.map((item) =>
                item === action.payload ? item : item
              )
            };
          } else {
            return {
              ...state,
              toastMessage: "ADDED TO LIKED VIDEOS",
              onClickLikeVideos: [...state.onClickLikeVideos, action.payload]
            };
          }
        }
        break;
      case "DELETE_VIDEO":
        return {
          ...state,
          toastMessage: "REMOVED FROM LIKED VIDEOS",
          onClickLikeVideos: state.onClickLikeVideos.filter(
            (item) => item !== action.payload
          )
        };
        case "DELETE_VIDEO_FROM_HISTORY":
          return {
            ...state,
            toastMessage: "REMOVED FROM LIKED VIDEOS",
            historyVideos: state.historyVideos.filter(
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
          toastMessage: "HISTORY CLEARED",
          historyVideos: []
        };
        case "ADD_NEW_PLAYLIST":
          return{
            ...state,
            customplaylists:[...state.customplaylists,{name :action.payload , videos:[]}]
          }
      case "ADD_TO_PLAYLIST":
        return{
          ...state,
          customplaylists :state.customplaylists.map((existingPlaylist)=>{
              if( existingPlaylist.name === action.payload.itemName && existingPlaylist !== action.payload){
               return {...existingPlaylist, videos:[...existingPlaylist.videos,action.payload]}
              }else{
                return existingPlaylist
              }
          })
        };
        case "DELETE_PLAYLIST":
          return{
            ...state,
            customplaylists:state.customplaylists.filter((playlists)=>playlists.name !== action.payload),
            list :state.list.filter((item)=>item !== action.payload)
          }
          case "REMOVE_FROM_PLAYLIST":
            return{
              ...state,
              customplaylists:state.customplaylists.map((item)=>{
                if(item.name === action.payload.itemName && item !== action.payload){
                 return {
                   ...item,
                   videos:item.videos.filter(({itemFound})=>itemFound !== action.payload.itemFound)
                 }
                }else{
                  return item;
                }
              })

            }
      default:
        return state;
    }
  }
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
          toastMessage,
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
