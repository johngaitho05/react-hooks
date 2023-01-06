import React, {useContext} from "react";
import {userContext} from "../components/userContext";

export default function Home(){
    const user = useContext(userContext)


    return (
        <div>
            <h2>Home</h2>
            <p>User is <span style={{color: 'red'}}>{user}</span></p>
        </div>
    )
}