import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  console.log(window.location.pathname);

  return ( 
    <div>
      {window.location.pathname.includes('/about') ? <About /> : <Home />}
    </div>
   );
}
 
export default App;