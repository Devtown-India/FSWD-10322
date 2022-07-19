import { useEffect } from "react";
import { useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    }
    useEffect(()=>{
        getUsers()
    },[])
    return ( 
        <div>
            <h1>
                Users from json placeholder
            </h1>
            <li>
                {
                users.map(user=><li key={user.id}>{user.name}</li>)
                }
            </li>
        </div>
     );
}
 
export default Users;