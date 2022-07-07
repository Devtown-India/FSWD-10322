import Heading from "./components/Heading";
import List from "./components/List";

const App = () => {

  const todos = ["Task 1", "Task 2", "Task 3"];
  const age = 19

  return ( 
    <div>
      <Heading/>
      <List age={age} todos={todos} />
    </div>
   );
}
 
export default App;