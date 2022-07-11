import {useState} from 'react'
import AddTodo from './components/AddTodo';
import Heading from './components/Heading';
import List from './components/List'

const App = () => {
  // let count = 0;

  let [todos,setTodos] = useState([])
  
  
  return ( 
    <div>
      <Heading/>
      <AddTodo setTodos={setTodos} />
      <List todos={todos} />
    </div>
   );
}
 
export default App;