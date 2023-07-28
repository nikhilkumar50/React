import { useEffect, useRef, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "../hooks/VideosDispatch";

const initialState={
  time:'1 month ago',
  channel:'coder dost',
  verified:true,
  title:'',
  views:'', 
}

function AddVideo({editableVideo,updateVideo,editVideoinfo}) {
  
  
  const dispatch=useVideoDispatch();
  const [Video, setVideo] = useState(initialState);
  const inputref=useRef(null);


  function handleSubmit(event) {
    event.preventDefault();
    if(editableVideo){
      dispatch({type:'update',payload:Video});
      editVideoinfo(null);

    }else{
      dispatch({type:'ADD',payload:Video});
    }
    
     
    setVideo(initialState);  
  }

  function handleChange(event) { 
    event.stopPropagation();
    setVideo({
        ...Video,[event.target.name]:event.target.value
    })
    
  }  

  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo);
    } 
    inputref.current.focus();
  },[editableVideo]);


  return (
    <form>
      <input
      ref={inputref}
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={Video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"  
        value={Video.views}
      />
      <button
        onClick={handleSubmit}
        
      >
      {editableVideo?'Edit ':'Add  '}Video
      </button>
    </form>
  );
}
export default AddVideo;
