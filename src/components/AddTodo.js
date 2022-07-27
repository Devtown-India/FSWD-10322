import { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch()

  const handleAdd = () => {
    const action = {
        type:"ADD_TODO",
        payload:task
    }
    dispatch(action)
  };

  return (
    <div>
      <input
        onChange={(e) => setTask(e.target.value)}
        class=" my-3 mx-2 shadow appearance-none border rounded  py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Add a Todo"
      ></input>
      <button
        onClick={handleAdd}
        class="bg-blue-500 mx-3 hover:bg-blue-700 text-white py-1 px-2 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
