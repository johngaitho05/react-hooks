import {useState} from "react";
import useDebounce from "../helpers/useDebounce";

// Alert the count value after 1000 milliseconds of inactivity
export default function App(){
    const [count, setCount] = useState(10)
    useDebounce(() => alert(count),1000, [count])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c+1)}>Increment</button>
        </div>
    )
}
