import React, { useContext } from 'react'
import { UserContext } from "./MyContext"
import './style.css'

function About() {
    const {user, data} = useContext(UserContext)
    return (
        <>
            <h1 className={user ? "kun" : "tun"}>About page</h1>
        </>
    );
}

export default About;