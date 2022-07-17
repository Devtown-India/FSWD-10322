import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timer,setTimer] = useState(null);

  useEffect(() => {
   return ()=>{
     clearInterval(timer)
   }
  },[]);

  const startTimer = ()=>{
     if(timer!=null) return window.alert("Timer is already running");
     const t = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setTimer(t)
  }

  const handlePause = ()=>{
    if(timer==null) return window.alert("Timer is not running")
    clearInterval(timer)
    setTimer(null)
  }

  const handleReset = ()=>{
    if(timer==null){
      setTime(0)
      return
    }
    clearInterval(timer)
    setTimer(null)
    setTime(0)
  }


  return (
    <div>
      <h1>{time}</h1>
      <button onClick={startTimer} >start</button>
      <button onClick={handlePause}>pause</button>
      <button onClick={handleReset}  >reset</button>
    </div>
  );
};

export default Timer;
