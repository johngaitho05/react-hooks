import {useState} from "react";
import useUpdateLogger from "../helpers/useUpdateLogger";


//Will log the input value in the console every time it changes with the help of the useUpdateLogger custom hook
export default function App(){
    const [name, setName] = useState('')
    useUpdateLogger(name)

    return (
        <input type="text"
               value={name}
               onChange={e => setName(e.target.value)}
        />
    )
}