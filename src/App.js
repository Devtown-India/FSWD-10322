import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Product from "./components/Product";
import Todos from "./components/Todos";
import Users from "./components/Users";

const App = () => {
  console.log(window.location.pathname);

  return ( 
    <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/todos">Todos</Link></li>
        {/* <li><Link to="/todos">Produc</Link></li> */}
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/users" element={<Users/>}  />
        <Route path="/todos" element={<Todos/>}  />
        <Route path="/product/:phone" element={<Product/>}  />
      </Routes>
    </div>
   );
}
 
export default App;