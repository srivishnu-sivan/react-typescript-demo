import { useState } from "react"

type AuthUser = {
    name: string,
    email:string
}



export const User = () => {
    const [user, setUser] = useState< AuthUser|null>(null) 
    const handleLogin = () => { 

        setUser({
            name: "vishnu Sivan",
            email: "mallikasrivishnu@gmail.com"
      })
    }
    const handleLogout = () => { 
        setUser(null)
    }


    return (
      <div>
        <button
          onClick={handleLogin}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 m-5 border border-blue-500 hover:border-transparent rounded"
        >
          LogIn
        </button>
        
        <button
          onClick={handleLogout}
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          Logout
            </button>
            
            <div >User name is {user?.name} </div>
            <div>User email is { user?.email}</div>
      </div>
    );
}