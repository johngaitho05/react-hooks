import React, {useContext, useState} from "react";

const ThemeContext = React.createContext()

function Context() {
    const [theme, setTheme] = useState('dark')

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <ChildComponent/>
        </ThemeContext.Provider>)
}

function ChildComponent(){
    return <GrandChildComponent/>
}

function GrandChildComponent(){
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <>
            <div>Theme is {theme}</div>
            <button onClick={()=> setTheme('light')}>
                Change to light theme
            </button>
        </>
    )
}

export default Context;
