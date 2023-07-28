import Video from "./Video";
import PlayButton from './PlayButton.js'
 

import useVideoContext from "../hooks/VideosContent";
import { useCallback } from "react";
function  VideoList({editVideo}){
  const Videos=useVideoContext();

  const play=useCallback(()=>console.log("play"),[]);
  const pause=useCallback(()=>alert("pause"),[]);

 



  
    return(
        <>
        {Videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          verified={video.verified}
          id={video.id}
          
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={play}
            onPause={pause}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
        </>
    )
}
export default VideoList;