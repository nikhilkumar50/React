import useThemeContext from '../hooks/ThemeContext';
import './PlayButton.css';
import { useContext, useState,memo } from 'react';
const PlayButton=memo (function PlayButton({children,message,onPlay,onPause}){
    
    const[playing,setPlaying] =useState(false);
    const theme =useThemeContext();
    function handleClick(event){
        
        event.stopPropagation();
        event.preventDefault();
        
        if(playing)onPause();
        else onPlay();

        setPlaying(!playing);

    }

    return(  
        <button className={theme} onClick={handleClick}>{children} :{playing?'||':'> '}</button>
    )


});
export default PlayButton;