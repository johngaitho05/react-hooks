import React, {useContext} from "react";
import {userContext} from "../components/userContext";

export default function About(){
    const user = useContext(userContext)


    return (
        <div>
            <h2>About</h2>
            <p>User is <span style={{color: 'red'}}>{user}</span></p>
        </div>
    )
}