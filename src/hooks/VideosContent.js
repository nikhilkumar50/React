import { useContext } from "react";
import VideoContext from "../Context/VideoContext";


function useVideoContext(){
    return useContext(VideoContext);
}
export default useVideoContext;