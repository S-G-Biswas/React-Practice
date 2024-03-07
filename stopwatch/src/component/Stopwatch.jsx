import React,{useState,useEffect,useRef} from "react";

function Stopwatch(){
    const[isRunning, setIsRunning]  = useState(false);
    const[time, setTime] = useState(0);
    const timerId = useRef(null);
    const  startRef = useRef(0);

    useEffect(() => {

    },[isRunning]);

    function start(){
        setIsRunning(true);
    }

    function stop(){
        
    }

    function reset(){
        
    }

    return(

        <div>
            <div>00:00:00</div>
            <button onClick={start}>Statrt</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}