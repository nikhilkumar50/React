import { useCallback, useMemo, useRef, useState } from "react";

function Counter(){
    
    const[number,setNumber]=useState(1);
    let num=useRef(0);

    function clickHandler(event){
        event.stopPropagation();
        setNumber((number)=>change(number));
        setNumber((number)=>change(number));
        setNumber((number)=>change(number));
        num.current++;
        console.log(num.current);
        
    }
    function change(number){
        return number+1;
    }
    
    //function of memoriaze kiya hai

    const fibx=useCallback(function fib(n){
        if(n==1 || n==2)return 1;
        return fib(n-1)+fib(n-2);
    },[]);

    //function value ko memoriaze kiya hai
     
    const fibMemozied=useMemo(()=>fibx(number),[number,fibx]); 
    return (
        <>
            <h1 style={{color:'white'}}>{number} {num.current} | {fibMemozied}</h1>
            <button onClick={clickHandler}>Add</button>
        </> 
    )
}
export default Counter;
