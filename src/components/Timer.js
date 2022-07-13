import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  

  useEffect(() => {

    const timer = setInterval(() => {
    setTime((prev) => prev + 1);
  }, 1000);

    return () => {
      clearInterval(timer);
    };
  },[]);

  return (
    <div>
      <h1>{time}</h1>
      <button>start</button>
      <button>pause</button>
      <button>reset</button>
    </div>
  );
};

export default Timer;
