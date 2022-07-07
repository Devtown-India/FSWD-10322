const List = ({age,todos}) => {
    return ( 
        <ol>
           {
                todos.map((todo, index) =><li key={index} >{todo}</li>)
           }
        </ol>
     );
}
 
export default List;