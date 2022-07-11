const List = ({todos}) => {
    return ( 
        <ol>
           {
                todos.length===0?"No todos yet": todos.map((todo,i) => {
                     return <li key={i}>{todo}</li>
                  })
           }
        </ol>
     );
}
 
export default List;