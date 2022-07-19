import { useEffect } from "react";
import { useState } from "react";

const Todos = () => {
    const [Todos, setTodos] = useState([]);
    const getTodos = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTodos(data);
    }
    useEffect(()=>{
        getTodos()
    },[])
    return ( 
        <div>
            <h1>
                Todos from json placeholder
            </h1>
            <li>
                {
                Todos.map(todo=><li key={todo.id}>{todo.title}</li>)
                }
            </li>
        </div>
     );
}
 
export default Todos;