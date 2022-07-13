import { useEffect, useState } from "react";
import Click from "./components/Click";
import Home from "./components/Home";
import Move from "./components/Move";

const App = () => {
  // let count = 0;

  const [display, setDisplay] = useState("");

  useEffect(() => {
    window.alert("select an option to render a component");
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li
            onClick={() => setDisplay("move")}
          >
            Move
          </li>
          <li onClick={() => setDisplay("click")}>Click</li>
          <li onClick={() => setDisplay((prev) => "home")}>Home</li>
        </ul>
      </nav>
      <section>
        {display === "home" ? (
          <Home />
        ) : display === "click" ? (
          <Click />
        ) : display === "move" ? (
          <Move />
        ) : (
          "select a component to render"
        )}
      </section>
    </div>
  );
};

export default App;
