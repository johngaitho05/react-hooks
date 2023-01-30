import useToggle from "../helpers/useToggle";


export default function App(){
    const [value, toggleValue] = useToggle(false)


    return (
        <div>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>make False</button>
        </div>
    )
}