import { useContext} from "react"
import {UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => { 
        if (userContext) {
            userContext.setUser({
                name: "Sri Vishnu Sivan",
                email: "vishnu@gmail.om"
            });
                 
        }
    }
    const handleLogout = () => { 
        if (userContext) {
            userContext.setUser(null)
        }
    }
    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>Username is {userContext?.user?.name} </div>
            <div>user Email is {userContext?.user?.email }</div>
        </>
    )
}