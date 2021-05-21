export const videoObj = {
    onClickLikeVideos: [],
    historyVideos: [],
    toastMessage: false,
    customplaylists :[ {
      name :"Watch Later",
      video:[]
    }],
    list:[],
    checkId:false,
    data:[],
  }
export  function reducer(state, action) {
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
      case "PLAYLIST_FROM_SERVER":
        return{
          ...state,
          customplaylists:action.payload  
        }
      case "PLAYLIST_NAMES":
        return{
          ...state,
          list :action.payload
        }
      case "LIKED_VIDEO":
        if (state.onClickLikeVideos.length >= 0) {
          const itemInArray = state.onClickLikeVideos.find(
            (item) => item._id === action.payload._id
          );
          if (itemInArray) {
            return {
              ...state,
              onClickLikeVideos: state.onClickLikeVideos.map((item) =>
              item._id === action.payload._id ? item : item
              )
            };
          } else {
            return {
              ...state,
              onClickLikeVideos: [...state.onClickLikeVideos, action.payload]
            };
          }
        }
        break;
      case "DELETE_VIDEO":
        return {
          ...state,
          onClickLikeVideos: state.onClickLikeVideos.filter(
            (item) => item !== action.payload
          )
        };
        case "DELETE_VIDEO_FROM_HISTORY":
          return {
            ...state,
            historyVideos: state.historyVideos.filter(
              (item) => item !== action.payload
            )
          };
      case "HISTORY_VIDEO":
        if (state.historyVideos.length >= 0) {
          const itemInArray = state.historyVideos.find(
            (item) => item._id === action.payload._id
          );
          if (itemInArray) {
            return {
              ...state,
              historyVideos: state.historyVideos.map((item) =>
                item._id === action.payload._id ? item : item
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
            customplaylists:[...state.customplaylists,{name :action.payload , video:[]}]
          }
      case "ADD_TO_PLAYLIST":
        return{
          ...state,
          customplaylists :state.customplaylists.map((existingPlaylist)=>{
              if( existingPlaylist.name === action.payload.itemName && existingPlaylist !== action.payload){
               return {...existingPlaylist, video:[...existingPlaylist.video,action.payload.itemFound]}
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
                   video:item.video.filter((item)=>item._id !== action.payload.itemFound._id)
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

