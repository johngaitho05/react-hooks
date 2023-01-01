import React, {useEffect, useRef} from "react";

function App(){
    const renderCount = useRef(0)

    useEffect(()=>{
        renderCount.current = renderCount.current + 1
    })
    return <div><span>{renderCount.current}</span></div>
}



export default App