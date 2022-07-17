import './index.css'
import { useEffect, useState } from "react";
import Click from "./components/Click";
import Home from "./components/Home";
import Timer from "./components/Timer";
import axios from 'axios';

const App = () => {

  const [todos,settodos] = useState([]);

  const getData = async ()=>{
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const data = response.data
      settodos(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <ol>
        {
          todos.map(todo=>(
            <li key={todo.id} > {todo.title}</li>
          ))
        }
      </ol>
    </div>
  );
};

export default App;
