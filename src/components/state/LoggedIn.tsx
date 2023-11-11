import { useState } from "react"

export const LoggedIn = () => {

    const [isLogIn, setLogIn] = useState(false)


    const handleLogin = () => {

        setLogIn(true)

     }
    const handleLogout = () => { 
        setLogIn(false)
    }


    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>logout</button>
            <section>{isLogIn? 'Hi Sri vishnu' : 'logged out' }</section>
        </div>
    )
}