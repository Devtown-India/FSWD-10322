import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Recipe from "./components/Recipe";

const App = () => {
  return ( 
    <>
    <Navbar/>
     <div style={{minHeight:"80vh"}} className="container my-2">
      <Recipe/>
     </div>
    <Footer/>
    </>
   );
}
 
export default App;