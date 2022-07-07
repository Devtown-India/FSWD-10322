import {useState} from 'react'

const App = () => {
  // let count = 0;

  let [count,setCount] = useState(0)
  
  const handleIncrement = ()=>setCount(prev=> prev+1)

  const handleDecrement = ()=>setCount(prev=> prev-1)
  
  return ( 
    <div>
      <h1>{count}</h1>
      <button onClick={handleDecrement} >-</button>
      &nbsp;
      &nbsp;
      <button  onClick={handleIncrement} >+</button>

    </div>
   );
}
 
export default App;