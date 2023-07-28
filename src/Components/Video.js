import { useContext, useEffect,memo } from "react";
import "./Video.css";
import useThemeContext from "../hooks/ThemeContext";
import useVideoDispatch from "../hooks/VideosDispatch";

const Video= memo( function Video({title,channel = "Coder Dost",views,time,verified,id,children,editVideo,})
     
{
  const theme=useThemeContext();
  const dispatch=useVideoDispatch();

  console.log("Video component chala");

  // useEffect(()=>{
  //   const idx=setInterval(()=>{
  //     console.log("Video Playing",id);

  //   },3000);
  //   return ()=>{
  //     clearInterval(idx);
  //   }

  // },[id])


  return (
    <>
      <div className={`container ${theme}`}>
      <button className="close" onClick={()=> dispatch({type:'Delete',payload:id})}>X</button>
      <button className="edit" onClick={()=>editVideo(id)}>Edit</button>

        <div className="pic"> 
          {/* Use forward slashes or double backslashes for the file path */}
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Tutorial" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {verified && "✅"}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
      
    </>
  );
})

export default Video;
