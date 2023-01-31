import useArray from "../helpers/useArray";

// useArray hook makes working with arrays easier
// It does this by abstracting the commonly performed actions in to simple functions
export default function App(defaultValue){
    const {array, set, push, filter, update,insert, remove, clear} = useArray([
        1,2,3,4,5,6
    ])

return (
    <div>
        <div>{array.join(', ')}</div>
        <button onClick={() => push(7)}>Add 7</button>
        <button onClick={() => update(1,9)}>Change Second Element to 9</button>
        <button onClick={() => insert(2,0)}>Insert 0 in the Third Position</button>
        <button onClick={() => remove(1)}>Remove Second Element</button>
        <button onClick={() => filter(n => n < 4)}>Keep Numbers less Than 4</button>
        <button onClick={() => set([1,2])}>Set to 1, 2</button>
        <button onClick={clear}>Clear</button>
    </div>
)
}