import { useEffect, useState } from "react";

const Click = () => {
  const [count, setCount] = useState(0);

  const listenForCLicks =  () => {
        setCount(prev=>prev+1);
    }

  useEffect(() => {
    document.addEventListener("click",listenForCLicks)

    return ()=>{
        document.removeEventListener("click",listenForCLicks)
    }
  }, []);

  return (
    <div>
      <h1>Click</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default Click;
