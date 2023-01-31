import { useState} from "react";
import useUpdateEffect from "../helpers/useUpdateEffect";


// useUpdateEffect hook is basically a useEffect that does not run on the first render.
// Only runs when the dependencies change
// Note: It won't work on strict mode as the component is rendered twice
export default function App(){
    const [count, setCount] = useState(10)

    useUpdateEffect(() => alert(count), [count])

    return (
        <div>
          <div>{count}</div>
            <button onClick={() => setCount(c => c+1)}>Increment</button>
        </div>
    )
}