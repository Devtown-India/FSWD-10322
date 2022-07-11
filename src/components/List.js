import Item from "./Item";

const List = ({todos,setTodos}) => {
    return ( 
        <ol>
           {
                todos.length===0?"No todos yet": todos.map((todo,i) => <Item setTodos={setTodos} todo={todo} key={i} />)
           }
        </ol>
     );
}
 
export default List;