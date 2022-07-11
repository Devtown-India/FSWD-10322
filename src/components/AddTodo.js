import { useState } from "react";


const AddTodo = ({setTodos}) => {
    const [task,setTask] = useState('')
    const handleChange = (e)=> setTask(prev=>e.target.value)
    const handleSubmit = ()=>{
        console.log(task)
        setTodos(prev=>[...prev,task])
    }
    return ( 
        <h2>
            <input onChange={handleChange} type="text" />
            <button onClick={handleSubmit} >Add</button>
        </h2>
     );
}
 
export default AddTodo;