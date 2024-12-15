import { useEffect, useState } from "react"
import axios from "axios"

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
    }

    return(
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.name}</p>    
                    <p>{user.phone}</p>  
                </div>       
            ))}
        </div>
    )
}
export default UserList