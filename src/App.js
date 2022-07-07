const App = () => {
  const message = "Hello World";
  const val = 90
  return ( 
    <div>
      <h1>hi from react</h1>
      <div>{val>10?"val is greater than 10":"val is less than 10"}</div>
    </div>
   );
}
 
export default App;