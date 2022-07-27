import { useDispatch } from "react-redux";

const Todo = ({ task }) => {

  const dispatch = useDispatch();

  const handleRemove = (task)=>{
    const action = {
      type:"REMOVE_TODO",
      payload:task
    }
    dispatch(action)
  }

  return (
    <li>
      {task}
      <button onClick={()=>handleRemove(task)} class="bg-blue-500 mx-3 hover:bg-blue-700 text-white py-1 px-2 rounded">
        Remove
      </button>
    </li>
  );
};

export default Todo;
