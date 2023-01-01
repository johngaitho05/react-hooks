import React, {useState, useTransition} from "react";

function App(){
    const [isPending,startTransition] = useTransition()
    const [input, setInput] = useState("")
    const [list,setList] = useState([])

    const LIST_SIZE = 20000

    function handleChange(e){
        setInput(e.target.value)
        let l = []

        // The effect of this code will be rendered afterwards (non-blocking)
        startTransition(()=>{
            for(let i=0;i<LIST_SIZE;i++){
                l.push(e.target.value)
            }
            setList(l)
        })

    }

    return (
        <>
            <input type="text" onChange={handleChange} value={input}/>
            { isPending ? <div>Loading...</div> :
                list.map((item,index)=>{
                    return <div key={index}>{item}</div>
                })
            }
        </>
    )
}

export default App