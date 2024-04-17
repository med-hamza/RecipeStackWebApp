import { useState } from "react"
const User = () => {

    const [users, setUsers] = useState();
    return (
        <div>
            {users.length ? (
                <ul>
                    {users.map((user, i) => <li key={i}> {user?.username}</li>)}
                </ul>
            ) : <p>no user to display</p>}
        </div>
    )
}

export default User
