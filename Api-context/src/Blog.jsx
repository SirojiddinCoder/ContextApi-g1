import React from 'react'
import { UserContext } from "./MyContext"
import './style.css'    

export default function Blog() {
    const {user} = React.useContext(UserContext)
  return (  
    <div>
        <h1 className={user ? "kun" : "tun"}>Blog</h1>
    </div>
  )
}
