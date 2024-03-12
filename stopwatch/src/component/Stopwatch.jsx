import React,{useState,useEffect} from "react";

export default function Stopwatch(){
    const[start, setStart]  = useState(false);
    const[stop, setStop] = useState(false);
    const[time, setTime] = useState(0);
    const[timer,setTimer] = useState('')

    useEffect(() => {
         let timer = null
         if(start && !stop){
            timer = setInterval( ()=>{
                 setTime(time => time + 1)
            },1000)
         }
         else if(stop){
           clearInterval(timer)
         }
         return ()=>{
            clearInterval(timer)
         }
    },[start,stop]);

    useEffect(()=>{
        const date = new Date(0)
        date.setSeconds(time)

        setTimer(date.toISOString().slice(11,19))
    })

    const handleStart =()=>{
        setStop(false)
        setStart(true)
    }

    const handleStop =()=>{
      setStart(false)
      setStop(true)
    }
    
    const handleReset =()=>{
         setTime(0)
         setStart(false)
         setStop(false)
    }

    return(

        <div>
            <div>{timer}</div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}