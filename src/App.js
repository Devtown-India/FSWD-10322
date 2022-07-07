const App = () => {
  let count = 0;
  
  const handleIncrement = (e)=>{
    count++;
  }
  const handleDecrement = (e)=>{
    count--;
  }
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