import "./App.css";
import VideosDB from "./Components/Data.js";
import { useCallback, useReducer, useState } from "react";
import AddVideo from "./Components/AddVideo";
import VideoList from "./Components/VideoList";
import ThemeContext from "./Context/ThemeContext";
import useThemeContext from "./hooks/ThemeContext";
import VideoContext from "./Context/VideoContext";
import VideoDispatchContext from "./Context/VideoDispatchContext";
import Counter from "./Components/Counter";

function App() {

  const[editableVideo,setEditableVideo]=useState(null);
  const[Videos,dispatch] =useReducer(VideoReducer,VideosDB);

  const[mode,setMode]=useState(useThemeContext());
  
  function VideoReducer(Videos,action){
    switch(action.type){
      case 'ADD':
        return [...Videos,{...action.payload,id:Videos.length+1}];
      case 'Delete':
        return Videos.filter((Video)=>Video.id!==action.payload);
      case 'update':
         const index=Videos.findIndex((V)=>V.id===action.payload.id)
        const newVideos=[...Videos]
        newVideos.splice(index,1,action.payload);
        
        return newVideos
      default :
        return Videos
    }

     
  }

  
  
  const editVideo=useCallback(function editVideo(id){
    
    setEditableVideo(Videos.find((Video)=>Video.id===id));
    
  },[Videos])
  

  return (
    
    <ThemeContext.Provider value={mode}>
    <VideoContext.Provider value={Videos}>
    <VideoDispatchContext.Provider  value={dispatch}>
    

    <div className={`App ${mode}`} onClick={() => console.log("App")}>
      <Counter></Counter>
      <button onClick={()=>setMode(mode==='darkMode'?"lightMode":"darkMode")}> Theme Color</button>
      <AddVideo  editableVideo={editableVideo}  editVideoinfo={setEditableVideo}>AddVideo</AddVideo>
      <VideoList  editVideo={editVideo}  ></VideoList>
    </div>
    </VideoDispatchContext.Provider>
    </VideoContext.Provider>

    </ThemeContext.Provider>
    
  );
}
export default App;
