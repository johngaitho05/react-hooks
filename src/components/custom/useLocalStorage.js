import {useState} from "react";
import useLocalStorage from '../helpers/useLocalStorage'


// The input value is stored in the localStorage such that the value persists even after refresh, thanks to the useLocalStorage custom hook
export default function App(){
    const [name, setName] = useLocalStorage('key','')


    return (
        <input type="text"
               value={name}
               onChange={e => setName(e.target.value)}
        />
    )
}