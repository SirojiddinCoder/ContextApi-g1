import React, { useContext } from 'react'
import { UserContext } from './MyContext'

export const Navbar = () => {
    const {data} = useContext(UserContext)
  return (
    <div>
        <button onClick={data}>kun tun</button>
    </div>
  )
}
