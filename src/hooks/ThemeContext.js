import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function useThemeContext(){
    return useContext(ThemeContext);
}
export default useThemeContext;