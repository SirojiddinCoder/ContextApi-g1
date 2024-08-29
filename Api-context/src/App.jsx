import React, { useState } from "react"


import { UserContext } from "./MyContext"
import About from "./About"
import Blog from "./Blog"
import { Navbar } from "./Navbar"


function App() {
  const [user, setUser] = useState(true)

  const data = ()=>{
      setUser(false)
  }
  
  return (  
    <>
      <UserContext.Provider value={{user, data}}>
        <Navbar/>
        <About/>
        <Blog/>
      </UserContext.Provider>

    </>
  )
}

export default App
