import {useState, useCallback} from "react";
import List from '../components/helpers/List'

export default function App(){
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)


    // Normally, this function will be recreated every time the application renders
    // With useCallback however, the function will only be recreated  when any of the defined dependencies is updated
    // Works like useMemo except that it returns a memoized function instead of a memoized value
    // Note that this function is not called when we toggle the theme
    const getItems = useCallback(
        () => {
            return [number, number+1, number+2]
        },
        [number],
    );
    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <div style={theme}>
            <div>
                <input type="number"
                       value={number}
                       onChange={e => setNumber(parseInt(e.target.value))}/>
            </div>
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle Theme
            </button>
            <List getItems={getItems}/>
        </div>
    )

}