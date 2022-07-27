import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const List = () => {

    const todos = useSelector(state=>state.todos)

    return ( 
        <div>
            <h1>Todos</h1>
            <AddTodo/>
            <ol>
                {todos.map(todo=><Todo task={todo}/>)}
            </ol>
        </div>
     );
}
 
export default List;